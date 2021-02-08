module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .post(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .post(app.api.category.save)
        .get(app.api.category.get)

    app.route('/categories/three')
    .get(app.api.category.getThree)

    app.route('/categories/:id')
    .post(app.api.category.save)
    .get(app.api.category.getById)

    app.route('/categories/remove/:id')
        .delete(app.api.category.remove)
}