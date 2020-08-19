const Model = require("../connect");

module.exports = {
    logoutCurrentUser: (request, reply) => {
        const sessionToken = '';
        // Model.Sessions.findAll({ limit: 1, order: '"createdAt" DESC' })
        // .then((ans) => {
        //     console.log(ans);
        //     // sessionToken = ans
        // });
        Model.Sessions.destroy({
            where: { session_token: sessionToken },
        }).then((ans) => {
            if (ans) {
                reply({
                    status: 200,
                    statusText: "OK",
                    message: "Successfully Deleted the Token!",
                });
            } else {
                reply("Error!!! Token not deleted.");
            }
        });
    },
};
