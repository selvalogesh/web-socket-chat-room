const errorHandler = (err, req, res, next) => {
    //Production setup errors
    if (err.name === 'URIError') {
        //Should stop the server from starting
        throw err;
    }

    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ message: 'Invalid Token' });
    }

    //throw err;
    // default to 500 server error
    return res.status(500).json({ message: err.message });
}

export default errorHandler;