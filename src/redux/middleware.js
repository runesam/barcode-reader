export default [
    store => next => action => {
        const { type, payload } = action;
        switch (type) {
            default: next(action);
        }
    }
];
