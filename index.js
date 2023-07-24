const express=require('express')
const dotenv=require('dotenv')
const TelegramBot = require('node-telegram-bot-api');
const app=express()
dotenv.config()
app.use(express.json())

const token = process.env.BOT_TOKEN;


const bot = new TelegramBot(token, {polling: true});
bot.on('message',(message)=>{
 console.log(message.text )
})

bot.onText(/hi|hello/i, (msg) => {
  const chatId = msg.chat.id;
  const replyMessage = "☄️ Welcome to AwareBot click -> /menu ";
  bot.sendMessage(chatId, replyMessage);
});
bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;
  const menuOptions = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📚 Free Education Programs", callback_data: "Free Education" }],
        [{ text: "🤝 Support Groups & NGOs", callback_data: "NGO" }],
        [{ text: "⚕️ Medicine & HealthCare", callback_data: "Medicine" }],
        [{ text: "🌿 Environment Awareness", callback_data: "Env" }],
        [{ text: "🎁 Donate To cause", callback_data: "Donate" }],
        [{ text: "👨‍💻 About Developer", callback_data: "Me" }],
      ],
    },
  };
  bot.sendMessage(chatId, "Please select a topic from the menu:", menuOptions);
});

bot.on('callback_query', (query) => {
  const topic = query.data;
  const chatId = query.message.chat.id;

  switch (topic) {
    case "Free Education":
      const educationResources =
        "Here are some free education programs you can explore:\n" +
        "🔴 Basic Level Courses:\n" +
        "1. [Khan Academy](https://www.khanacademy.org/) 🎒\n" +
        "2. [YouTube - Crash Course](https://www.youtube.com/user/crashcourse) 📺\n" +
        "3. [Google Digital Garage](https://learndigital.withgoogle.com/digitalgarage) 💻\n" +
        "4. [Microsoft Learn](https://learn.microsoft.com/) 📚\n" +
        "5. [IBM SkillsBuild](https://skillsbuild.org/) 🧠\n" +
        "\n🟡 Intermediate Level Courses:\n" +
        "6. [Codecademy](https://www.codecademy.com/) 👨‍💻\n" +
        "7. [Coursera](https://www.coursera.org/) 📈\n" +
        "8. [edX](https://www.edx.org/) 🎓\n" +
        "9. [MIT OpenCourseWare](https://ocw.mit.edu/) 🏛️\n" +
        "10. [Udemy](https://www.udemy.com/) 📖\n" +
        "\n🟢 Advanced Level Courses:\n" +
        "11. [Stanford Online](https://online.stanford.edu/) 🌲\n" +
        "12. [Harvard Online Learning](https://online-learning.harvard.edu/) 🎓\n" +
        "13. [FutureLearn](https://www.futurelearn.com/) 🌟\n" +
        "\n🎓 Verified Examinations and Certifications:\n" +
        "14. [Coursera Certifications](https://www.coursera.org/courses?query=certificates) 📜\n" +
        "15. [edX Certificates](https://www.edx.org/professional-certificate) 🏅\n" +
        "16. [IBM Digital Badges](https://www.youracclaim.com/organizations/ibm/badges) 🔖\n" +
        "17. [Microsoft Certifications](https://www.microsoft.com/en-us/learning/certification-overview.aspx) 🚀\n" +
        "18. [Google Career Certificates](https://grow.google/certificates/) 🌐\n" +
        "\nExplore these platforms to access a wide range of educational content. Happy learning! 📚🎓";
      bot.sendMessage(chatId, educationResources, { parse_mode: "Markdown" });
      break;
    case "NGO":
      const ngoResources =
        "Here are some NGOs and support groups working towards social equality:\n" +
        "1. [Amnesty International](https://www.amnesty.org/) 🕊️\n" +
        "2. [Human Rights Watch](https://www.hrw.org/) 👥\n" +
        "3. [UNICEF](https://www.unicef.org/) 🌏\n" +
        "4. [World Wide Fund for Nature (WWF)](https://www.worldwildlife.org/) 🐼\n" +
        "5. [Oxfam](https://www.oxfam.org/) 🤝\n" +
        "6. [International Rescue Committee (IRC)](https://www.rescue.org/) 🆘\n" +
        "7. [CARE International](https://www.care-international.org/) 🤲\n" +
        "8. [Global Giving](https://www.globalgiving.org/) 🌍\n" +
        "\nSupport these organizations to contribute to social equality initiatives around the world. Together, we can make a difference! 🤝";
      bot.sendMessage(chatId, ngoResources, { parse_mode: "Markdown" });

      break;
    case "Medicine":
      const medicineResources =
        "Here are some resources related to medicine and healthcare:\n" +
        "1. [World Health Organization (WHO)](https://www.who.int/) 🏥\n" +
        "2. [Centers for Disease Control and Prevention (CDC)](https://www.cdc.gov/) 🌡️\n" +
        "3. [MedlinePlus](https://medlineplus.gov/) 📑\n" +
        "4. [Doctors Without Borders (Médecins Sans Frontières)](https://www.doctorswithoutborders.org/) 🏩\n" +
        "5. [WebMD](https://www.webmd.com/) 💊\n" +
        "\nStay informed about health and healthcare initiatives to promote well-being for all. ⚕️🏥";
      bot.sendMessage(chatId, medicineResources, { parse_mode: "Markdown" });
      break;
    case "Env":
      const environmentResources =
        "Here are some environment awareness initiatives and resources:\n" +
        "1. [United Nations Environment Programme (UNEP)](https://www.unep.org/) 🌱\n" +
        "2. [National Geographic - Environment](https://www.nationalgeographic.com/environment/) 🌍\n" +
        "3. [Greenpeace](https://www.greenpeace.org/) 🌊\n" +
        "4. [World Wildlife Fund (WWF)](https://www.worldwildlife.org/) 🐼\n" +
        "5. [The Nature Conservancy](https://www.nature.org/) 🌳\n" +
        "\nJoin the movement to protect and preserve our environment for future generations. 🌿🌍";
      bot.sendMessage(chatId, environmentResources, { parse_mode: "Markdown" });
      break;
      case "Donate":
  const donationSites = [
    {
      name: "Amnesty International",
      link: "https://www.amnesty.org/donate/",
      description: "A global human rights organization working to protect human rights worldwide.",
    },
    {
      name: "UNICEF",
      link: "https://www.unicef.org/donate",
      description: "The United Nations Children's Fund, dedicated to providing humanitarian and developmental aid to children worldwide.",
    },
    {
      name: "World Wildlife Fund (WWF)",
      link: "https://www.worldwildlife.org/",
      description: "A global conservation organization working to protect the diversity of life on Earth.",
    },
  ];

  let donateMessage = "Here are some organizations you can donate to and support social equality causes:\n\n";

  donationSites.forEach((donation) => {
    donateMessage += `🕊️${donation.name}\n`;
    donateMessage += `   ${donation.description}\n`;
    donateMessage += `   [Donate Now](${donation.link})\n\n`;
  });

  bot.sendMessage(chatId, donateMessage, { parse_mode: "Markdown" });
  break;
    case "Me":
      bot.sendMessage(
        chatId,
        "Hello! I am Manish, the developer of EqualityBot. I created this bot with the goal of promoting social equality and providing valuable resources to users. If you have any questions or suggestions, feel free to ask! 🤗 press -> /start_poll "
      );
      break;
    default:
      break;
  }
});

const pollQuestion = "Which social equality issue do you care about the most?";
const pollOptions = ["Gender Equality", "Racial Justice", "LGBTQ+ Rights", "Disability Rights", "Education", "Poverty", "Medicine & Healthcare", "Environment Awareness"];

bot.onText(/\/start_poll/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendPoll(chatId, pollQuestion, pollOptions, { is_anonymous: false });
});

app.listen(7000,console.log("on 7000..."))