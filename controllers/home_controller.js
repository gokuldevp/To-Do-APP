module.exports.home = (req, res) => {
    let renderVariables = {
        title: "To Do App"
    }
    return res.render('home', renderVariables);
};