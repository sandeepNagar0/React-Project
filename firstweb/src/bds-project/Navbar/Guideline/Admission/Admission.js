import Component from "../../About-Us-DropDown/Mission/Component/Component";

function Admission() {
  const Adata = {
    title: "Admission Guideline",
    subtitle: "Admission Guideline",
    ptext:
      "The academic session 2026-2027 commences on 1st April 2026 and concludes on 31st March 2027. Brochure are available at the reception of the school.",

    headingh1: "Registration",

    h1ptext1: {
      bold: "1. Registration Period:",
      normal: " Registration opens in November every year.",
    },

    h1ptext2: {
      bold: "2. Registration Process:",
      normal: " Parents can register their child online through the school website or fill out the Google form at the admission cell.",
    },

    h1ptext3: {
      bold: "3. Registration Fee:",
      normal: " There is no registration fee.",
    },

    h1ptext4: {
      bold: "4. Required Documents:",
      normal: " Parents must submit the required documents, to confirm their registration.",
    },

    h1ptext5: "Birth certificate, Aadhaar card, Passport-sized photograph",

    img: "https://bdsinternationalschool.net/images/aboutus1.jpg",

    heading2: "Entrance Test",

    h2ptext1:{
      bold:'1. Entrance Test Date: ',
      normal:'The entrance test will be held on a specified date, which will be communicated to parents in advance.',
    },

    h2ptext2:{
      bold:'2. Test Subjects & Syllabus:',
      normal:'The test will be based on a few specified subjects.',
    },

    h2ptext3:{
      bold:'For classes I-IV :',
      normal:'English, Hindi, Maths',
    },

    h2ptext4:{
      bold:'For classes VI to IX :',
      normal:'English, Maths, Science',
    },

    h2ptext5:{
     bold:'',
     normal:'The syllabus will be provided by the school & based on the previous class curriculum/board syllabus.',
    },

    h2ptext6:{
      bold:'3. Test Duration :',
      normal:'The duration of the test will be 90 minutes.',
    }
    
  };
  return <Component data={Adata} />;
}

export default Admission;
