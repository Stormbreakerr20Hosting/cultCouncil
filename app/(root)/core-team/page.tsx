import { Linkedin } from "lucide-react";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Luv Sharma",
      role: "Web Dev Lead",
      image: "/assets/cc_core/_Luv_Sharma_IIT_Mandi.png",
      instagram: "luvsharma2004",
      linkedin: "https://www.linkedin.com/in/luvsharmaa",
    },
    {
      name: "Pratim Kundu",
      role: "Faculty Advisor",
      image: "/assets/FA.png",
      instagram: "culturals.iitmandi",
      linkedin: "https://www.linkedin.com/in/pratim-kundu-07258332/",
    },
    {
      name: "Nishchay",
      role: "Member",
      image: "/assets/cc_core/Nishchay_IIT_Mandi.jpg",
      instagram: "culturals.iitmandi",
      linkedin: "https://www.linkedin.com/in/nishchay-valmiki-0870bb286/",
    },
    {
      name: "Vivek Aggarwal",
      role: "Cultural Secretary",
      image: "/assets/cc_core/Vivek_Aggarwal_Cultural_Secretary.jpg",
      instagram: "vivekaggarwal05",
      linkedin: "https://www.linkedin.com/in/vivek-aggarwal-b005b125a",
    },
    {
      name: "Aryan Singh",
      role: "Member",
      image: "/assets/cc_core/Aryan_singh.jpg",
      instagram: "skd.arya18",
      linkedin: "https://www.linkedin.com/in/aryan0singh/",
    },
    {
      name: "Aritra Boral",
      role: "Member",
      image: "/assets/cc_core/Aritra_Boral_IIT_Mandi.jpg",
      instagram: "lucifer_morningstar_06660",
      linkedin: "https://www.linkedin.com/in/aritra-boral",
    },
    {
      name: "Gargi Chauhan",
      role: "Member",
      image: "/assets/cc_core/Gargi_Ketan_Chauhan_IIT_Mandi.jpeg",
      instagram: "culturals.iitmandi",
      linkedin: "https://www.linkedin.com/in/gargi-chauhan",
    },
    {
      name: "Garima Chauhan",
      role: "Member",
      image: "/assets/cc_core/_Garima_Ketan_Chauhan_IIT_Mandi.jpeg",
      instagram: "culturals.iitmandi",
      linkedin: "https://www.linkedin.com/in/garima-ketan-chauhan",
    },
    {
      name: "Akash Bagri",
      role: "Member",
      image: "/assets/cc_core/Akash_Bagri_IIT_Mandi.jpeg",
      instagram: "kyayaarbagri",
      linkedin: "https://www.linkedin.com/in/akash-bagri-8238042a5",
    },
    {
      name: "Akshay",
      role: "Member",
      image: "/assets/cc_core/Akshay_Mukkera.png",
      instagram: "akshay_1_314",
      linkedin: null,
    },
    {
      name: "Harshbir Singh",
      role: "Member",
      image: "/assets/cc_core/Harshbir_Singh.jpg",
      instagram: "harshbir_026",
      linkedin: "https://www.linkedin.com/in/harshbir-singh-1b37022b8",
    },
    {
      name: "Priyanka",
      role: "Member",
      image: "/assets/cc_core/Priyanka.jpg",
      instagram: "priynka_0004",
      linkedin: "https://www.linkedin.com/in/priyanka-chouhan-bb85aa2a1",
    },
    {
      name: "Yash",
      role: "Designer",
      image: "/assets/cc_core/Yash.jpg",
      instagram: "yash_k_.9",
      linkedin: "https://www.linkedin.com/in/yash-kataria-6a3610284",
    },
    {
      name: "Prabhat Kumar Sahu",
      role: "Member",
      image: "/assets/cc_core/Prabhat_Kumar_Sahu.jpg",
      instagram: "m_prabhat",
      linkedin: "https://www.linkedin.com/in/prabhat-kr-sahu",
    },
    {
      name: "Shubham S Padhi",
      role: "Designer",
      image: "/assets/cc_core/Shubham_Shrimay_Padhi.jpeg",
      instagram: "shubum_27",
      linkedin: "https://www.linkedin.com/in/shubham-s-padhi/",
    },
    {
      name: "Naman Khatak",
      role: "Member",
      image: "/assets/cc_core/Naman_Khatak.jpeg",
      instagram: "n.a.m.a.n.devil",
      linkedin: null,
    },
    {
      name: "Anand Pratap Singh",
      role: "Member",
      image: "/assets/cc_core/Anand_Pratap_Singh.jpg",
      instagram: "anandpratapsingh101",
      linkedin: "https://www.linkedin.com/in/anand-pratap-singh-b473832ba",
    },
    {
      name: "Arpita Kumari",
      role: "Member",
      image: "/assets/cc_core/Arpita_Kumari.jpg",
      instagram: "arpitaa1112",
      linkedin: "https://www.linkedin.com/in/arpita-kumari-b371562a5",
    },
  ];
  const PastSecretaries = [
    [
      {
        name: "Aarya Suthar",
        Tenure: "2023-2024",
        image: "/assets/img/Aarya_Priteshkumar_Suthar.JPG",
        linkedin: "https://www.linkedin.com/in/aaryasuthar/",
      },
      {
        name: "Kanak Dubey",
        Tenure: "2022-2023",
        image: "/assets/img/Kanak_Dubey.jpg",
        linkedin: "https://www.linkedin.com/in/kanak-dubey-0587a6218/",
      },
      {
        name: "Shivani Pandey",
        Tenure: "2021-2022",
        image: "/assets/img/Shivani_pandey.jpg",
        linkedin: "https://www.linkedin.com/in/shivani-pandey-1520/",
      },
      {
        name: "Tushar Tyagi",
        Tenure: "2020-2021",
        image: "/assets/img/tushar_tyagi.jpg",
        linkedin: "https://www.linkedin.com/in/tushartyagi01/",
      },
      {
        name: "Rishabh Dharmani",
        Tenure: "2019-2020",
        image: "/assets/img/Rishabh.jpg",
        linkedin: "https://www.linkedin.com/in/rishabh-dharmani/",
      },
      {
        name: "K. Sai Sandeep",
        Tenure: "2017-2018",
        image: "/assets/img/sai_sandeep.jpg",
        linkedin:
          "https://www.linkedin.com/in/sai-sandeep-kanikaram-94439716a/",
      },
      {
        name: "Nitesh Bansiwal",
        Tenure: "2016-2017",
        image: "/assets/img/nitesh.jpg",
        linkedin: "https://www.linkedin.com/in/nitesh-bansiwal/",
      },
      {
        name: "Kisna Mahajan",
        Tenure: "2015-2016",
        image: "/assets/img/kisna_mahajan.jpg",
        linkedin: "https://www.instagram.com/culturals.iitmandi/",
      },
      {
        name: "Harika Garimella",
        Tenure: "2014-2015",
        image: "/assets/img/harika.jpg",
        linkedin: "https://www.linkedin.com/in/harika-g-46aa9083?",
      },
      {
        name: "Akash Pathak",
        Tenure: "2013-2014",
        image: "/assets/img/akash.jpg",
        linkedin: "https://www.instagram.com/culturals.iitmandi/",
      },
      {
        name: "Eshaan Aggarwal",
        Tenure: "2012-2013",
        image: "/assets/img/eshaan.jpg",
        linkedin: "https://www.linkedin.com/in/eainmaking/",
      },
      {
        name: "Ankur Nahar",
        Tenure: "2011-2012",
        image: "/assets/img/ankur_nahar.jpg",
        linkedin: "https://www.linkedin.com/in/ankurnahar?",
      },
      {
        name: "Priyank Patel",
        Tenure: "2010-2011",
        image: "/assets/img/prayank_patel.jpeg",
        linkedin: "https://www.linkedin.com/in/priyank-patel-5408371b?",
      },
    ],
  ];
  const culturalSecretaryAndAdvisor = teamMembers.filter(
    (member) =>
      member.role === "Cultural Secretary" || member.role === "Faculty Advisor"
  );

  const otherMembers = teamMembers.filter(
    (member) =>
      member.role !== "Cultural Secretary" && member.role !== "Faculty Advisor"
  );

  return (
    <section className="py-8">
      <div className="flex flex-col justify-center items-center mb-24">
        <div className="mt-32 sm:mt-48 text-xl font-medium text-neutral-100/[0.7] text-center">
          This is the Cultural Society, IIT Mandi
        </div>
        <h1 className="text-6xl max-w-screen-md font-semibold text-center leading-tight max-sm:text-5xl max-sm:mt-3">
          Cultural Council
        </h1>
      </div>

      {/* Render Cultural Secretary and Faculty Advisor */}
      <div className="flex flex-wrap justify-center mb-20">
        {culturalSecretaryAndAdvisor.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex justify-center"
          >
            <div className="bg-none border border-white rounded-lg shadow-lg p-8 transition-all duration-800 hover:bg-gradient-to-r text-gray-400 from-purple-600 to-purple-400 hover:text-white cursor-pointer">
              <div className="w-40 h-40 bg-purple-200 p-2 rounded-full mx-auto mb-6 overflow-hidden transform hover:scale-110 transition-all duration-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl text-center font-semibold">
                {member.name}
              </h3>
              <p className="uppercase text-center tracking-widest text-sm font-light">
                {member.role}
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                {member.instagram && (
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    className="text-xl hover:text-purple-200"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-xl hover:text-purple-200"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-semibold text-center mb-20">CORE TEAM</h2>
      <div className="flex flex-wrap justify-center">
        {otherMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-20 flex justify-center"
          >
            <div className="bg-none border border-white rounded-lg shadow-lg p-8 transition-all duration-800 hover:bg-gradient-to-r text-gray-400 from-purple-600 to-purple-400 hover:text-white cursor-pointer">
              <div className="w-40 h-40 bg-purple-200 p-2 rounded-full mx-auto mb-6 overflow-hidden transform hover:scale-110 transition-all duration-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl text-center font-semibold">
                {member.name}
              </h3>
              <p className="uppercase text-center tracking-widest text-sm font-light">
                {member.role}
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                {member.instagram && (
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    className="text-xl hover:text-purple-200"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-xl hover:text-purple-200"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-semibold text-center mb-20">
        PAST SECRETARIES
      </h2>
      <div className="flex flex-wrap justify-center">
        {PastSecretaries[0].map((secretary, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-20 flex justify-center"
          >
            <div className="bg-none border border-white rounded-lg shadow-lg p-8 transition-all duration-800 hover:bg-gradient-to-r text-gray-400 from-purple-600 to-purple-400 hover:text-white cursor-pointer">
              <div className="w-40 h-40 bg-purple-200 p-2 rounded-full mx-auto mb-6 overflow-hidden transform hover:scale-110 transition-all duration-800">
                <img
                  src={secretary.image}
                  alt={secretary.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl text-center font-semibold">
                {secretary.name}
              </h3>
              <p className="uppercase text-center tracking-widest text-sm font-light">
                Tenure: {secretary.Tenure}
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                {secretary.linkedin && (
                  <a
                    href={secretary.linkedin}
                    className="text-xl hover:text-purple-200"
                  >
                    <FaLinkedin />
                  </a>
                )}

                <a
                  href="https://www.instagram.com/culturals.iitmandi/"
                  className="text-xl hover:text-purple-200"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
