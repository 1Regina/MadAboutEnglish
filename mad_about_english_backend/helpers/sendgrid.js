const sgMail = require("@sendgrid/mail");

exports.sendEmail = async (name, email, contact, message) => {
  try {
    console.log("entering controller");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "beckietan2810@gmail.com", // Change to your recipient Teacher Rebecca
      // to: [
      //   {
      //     email: "1reginacheong@gmail.com",
      //   },
      //   {
      //     email: `${email}`,
      //   },
      // ],
      from: "1reginacheong@gmail.com", //Change to your verified sender
      subject: `Message from ${name}`,
      text: `${name} from ${email} with contact ${contact} wrote you the following <br/> ${message}`,
      html: `${name} from ${email} with contact ${contact} wrote you the following <br/> ${message}`,
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error(error.message); // wont break
    if (error.response) {
      console.error(error.response.body);
    }
    return false;
  }
};
