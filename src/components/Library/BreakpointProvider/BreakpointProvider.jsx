import React from 'react';

const defaultContext = {
    xs: false,
    smUp: false,
    mdUp: false,
    lgUp: false,
    xlUp: false,
    smDown: false,
    mdDown: false,
    lgDown: false,
    xlDown: false,
};

export const BreakpointContext = React.createContext(defaultContext);

export const BreakpointProvider = ({ children }) => {
    const [queryMatch, setQueryMatch] = React.useState(defaultContext);

    const getMediaQuery = React.useCallback(() => {
        const queries = {
            xs: '(max-width: 599px)',
            smUp: '(min-width: 600px)',
            mdUp: '(min-width: 900px)',
            lgUp: '(min-width: 1200px)',
            xlUp: '(min-width: 1800px)',
            smDown: '(max-width: 600px)',
            mdDown: '(max-width: 900px)',
            lgDown: '(max-width: 1200px)',
            xlDown: '(max-width: 1800px)',
        };
        const mediaQueryLists = {};
        const keys = Object.keys(queries);
        let isAttached = false;

        // listener that updates the media query on client change
        const handleQueryListener = () => {
            const updatedMatches = keys.reduce((acc, media) => {
                acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
                return acc;
            }, {});
            setQueryMatch(updatedMatches);
        };

        // if the client supports the matchMedia() method
        // the handleQueryListener is added to each element of the mediaQueryList
        if (window && window.matchMedia) {
            const matches = {};
            keys.forEach((media) => {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media] = window.matchMedia(queries[media]);
                    matches[media] = mediaQueryLists[media].matches;
                } else {
                    matches[media] = false;
                }
            });
            setQueryMatch(matches);
            isAttached = true;
            keys.forEach((media) => {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media].addListener(handleQueryListener);
                }
            });
        }

        // removes all instances of the handleQueryListener
        return () => {
            if (isAttached) {
                keys.forEach((media) => {
                    if (typeof queries[media] === 'string') {
                        mediaQueryLists[media].removeListener(
                            handleQueryListener
                        );
                    }
                });
            }
        };
    }, []);

    React.useEffect(() => getMediaQuery(), [getMediaQuery]);

    return (
        <BreakpointContext.Provider value={queryMatch}>
            {children}
        </BreakpointContext.Provider>
    );
};

export function useBreakpoint() {
    const context = React.useContext(BreakpointContext);
    return context;
}
