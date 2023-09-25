require("dotenv").config();

const mailchimp = require("@mailchimp/mailchimp_transactional")(
  process.env.MANDRILL_API_KEY
);

const message = {
  from_email: "christian@technologist.ai",
  subject: "Hello world",
  text: "Mandrill Test From NSe!",
  to: [
    {
      email: "nonexistinguser@technologist.ai",
      type: "to",
    },
  ],
};

async function run() {
  const response = await mailchimp.messages.send({
    message,
  });
  console.log(response);
}
run();
