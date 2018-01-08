// // // // // // // // // // // // 
//
//	Cookies
//
// // // // // // // // // // // // 

// To check if 'visited' session cookie exists
const checkSessionCookieVisited = (req, res, next) => {
    let visited  = req.cookies.backbrook.visited;

    if(!visited || visited !== 'true') {
        res.cookie('backbrook.visited', 'true');
        res.redirect('/welcome');
    }

    next();
}



module.exports = { checkSessionCookieVisited };