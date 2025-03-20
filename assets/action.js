const generalPhysician = [
    {
        name: "Dr. Vijan Sharan, MBBS, MD",
        location: "Sona Center Apartment, Saguna More, Patna",
        specialties: ["General medicine", "Chronic illness management", "Viral infections", "Diabetes", "Tuberculosis", "and more"],
        experience: "26+ years",
        consultationFee: "₹500",
        rating: 4.7,
        contact: "Practo Profile"
    },
    {
        name: "Dr. Umesh Kumar, MBBS",
        location: "West Boring Canal Road, Patna",
        specialties: ["Diabetes management", "Chronic pain", "and more"],
        experience: "10+ years",
        consultationFee: null,
        rating: 4.6,
        contact: "Lybrate Profile"
    },
    {
        name: "Dr. Sanjeev Kr Chhaparia",
        location: "Rajendra Nagar, Patna",
        specialties: ["General physician with a strong focus on patient care"],
        experience: null,
        consultationFee: null,
        rating: 4.7,
        contact: "Lybrate Profile"
    },
    {
        name: "Dr. Pratyush Kumar, MBBS",
        location: "Makhania Kuan Road, near Masjid, Patna",
        specialties: ["General medical issues", "Fever", "Infections", "and more"],
        experience: null,
        consultationFee: "₹200",
        rating: 4.9,
        contact: "Practo Profile"
    },
    {
        name: "Dr. Aftab Alam",
        location: "Kankarbagh, Patna",
        specialties: null,
        experience: null,
        consultationFee: null,
        rating: null,
        contact: "MedIndia Profile"
    },
    {
        name: "Dr. Priyank Jha",
        location: "Patliputra Colony, Patna",
        specialties: null,
        experience: null,
        consultationFee: null,
        rating: null,
        contact: "Available on various online directories"
    },
    {
        name: "Dr. Adnan Imam",
        location: "Ashok Rajpath, Patna",
        specialties: null,
        experience: null,
        consultationFee: null,
        rating: null,
        contact: "Available on hospital directories like Medindia"
    },
    {
        name: "Dr. A.K. Verma",
        location: "Fraser Road, Patna",
        specialties: null,
        experience: null,
        consultationFee: null,
        rating: null,
        contact: "Lybrate Profile"
    },
    {
        name: "Dr. Md Junaidul Haque",
        location: "Kadam Kuan, Patna",
        specialties: null,
        experience: null,
        consultationFee: null,
        rating: null,
        contact: "Practo Profile"
    },
    {
        name: "Dr. Praveen Suman",
        location: "Rajeev Nagar, Patna",
        specialties: null,
        experience: null,
        consultationFee: null,
        rating: null,
        contact: "Lybrate Profile"
    }
];

const dentists = [
    {
        name: "Dr. Neal Kedia",
        location: "Kedia Orthodontics and Dental Clinic, Jamal Road, Patna",
        consultationFee: "₹200",
        contact: "Available upon request"
    },
    {
        name: "Dr. Abhishek Ranjan",
        location: "Patliputra Dental Care, Ashok Raj Path, Patna",
        consultationFee: "₹100",
        contact: "Available upon request"
    },
    {
        name: "Dr. Archana Rani",
        location: "Magadh Oro Dental & Orthodontic Clinic, Kankarbagh, Patna",
        consultationFee: "₹500 (₹300 online)",
        contact: "Available upon request"
    },
    {
        name: "Dr. Pratyush Anshuman",
        location: "Dream Looks Clinic, Boring Road, Patna",
        consultationFee: "₹300",
        contact: "Available upon request"
    },
    {
        name: "Dr. Vikas Vaibhav",
        location: "Dental Foundation, Rajendra Nagar, Patna",
        consultationFee: "₹100",
        contact: "Available upon request"
    },
    {
        name: "Dr. Anand Prateek",
        location: "Pradeep Dental Clinic, Jagdeo Path, Patna",
        consultationFee: "₹100",
        contact: "Available upon request"
    },
    {
        name: "Advanced Dental Hospital",
        location: "P.C. Colony, Kankarbagh, Patna",
        consultationFee: "Not specified",
        contact: "Available upon request"
    },
    {
        name: "The Tooth Doctors",
        location: "Maya Plaza, Bailey Road, Patna",
        consultationFee: "Not specified",
        contact: "Available upon request"
    },
    {
        name: "Oro-Dental Clinic",
        location: "Sumitra Complex, Ramnagri, Patna",
        consultationFee: "Not specified",
        contact: "Available upon request"
    },
    {
        name: "Dental Spa",
        location: "90 Feet Road, Shiekhpura, Patna",
        consultationFee: "Not specified",
        contact: "Available upon request"
    }
];

const entSpecialists = [
    {
        name: "Dr. A.P. Shah",
        location: "Maurya ENT Research Centre, Kankarbagh, Patna",
        consultationFee: "₹500",
        availableTimings: "3:00 PM - 6:00 PM (Thu)"
    },
    {
        name: "Dr. Baban Kumar",
        location: "Care Infinity ENT and Maternity Clinic, Patna",
        consultationFee: "₹500",
        availableTimings: "9:00 AM - 8:00 PM"
    },
    {
        name: "Dr. Awadh Prasad Gupta",
        location: "Dr. A.P. Gupta Clinic, Patna",
        consultationFee: "₹500",
        availableTimings: "10:00 AM - 2:00 PM"
    },
    {
        name: "Dr. K. Ranjan",
        location: "Dr. K Ranjan ENT Specialist, Patna",
        consultationFee: "₹500 (₹300 online)",
        availableTimings: "4:00 PM - 8:00 PM"
    },
    {
        name: "Dr. Arpana Shekhar",
        location: "Shekhar ENT Clinic, Patna",
        consultationFee: "₹700",
        availableTimings: "9:00 AM - 5:00 PM",
        specialization: ["Cochlear Implants", "Pediatric ENT Disorders"]
    },
    {
        name: "Dr. Dhiren Kumar",
        location: "Maurya ENT Research Centre, Gokul Plaza, Kankarbagh Main Road, Patna",
        consultationFee: "₹500",
        contact: "8862826478"
    },
    {
        name: "Dr. Sanjay Kumar Shahi",
        location: "Urniss ENT Clinic, Kumhrar, Patna",
        consultationFee: "₹300",
        contact: "9334262200"
    },
    {
        name: "Dr. Jairam Prasad",
        location: "Jai Hospital, New Bypass Road, Saristabad, Patna",
        consultationFee: "₹500",
        contact: "9931823220"
    },
    {
        name: "Dr. Avanindra Kumar",
        location: "Sheikhpura Raja Bazar, Patna",
        consultationFee: "₹300",
        contact: "9771090953"
    },
    {
        name: "Dr. Manoranjan Kumar",
        location: "Aarogya ENT Clinic, Rajendra Nagar, Patna",
        consultationFee: "₹500",
        contact: "7564836006"
    },
    {
        name: "Dr. Amit Kumar",
        location: "Harihar ENT Clinic, Boring Road, Patna",
        consultationFee: "₹500",
        contact: "8235757262"
    },
    {
        name: "Dr. Amarnath Prasad",
        location: "Jeevan ENT & Maternity Hospital, Sandalpur Road, Patna",
        consultationFee: "₹200",
        contact: "9771627612"
    },
    {
        name: "Dr. Ratnesh Kumar",
        location: "R.K. ENT Clinic, Kankarbagh, Patna",
        consultationFee: "₹300",
        contact: "9934823220"
    },
    {
        name: "Dr. Md. Ozair",
        location: "Alam Clinic, Tripolia, Patna",
        consultationFee: "₹500",
        contact: null
    },
    {
        name: "Dr. Gaurav Ashish",
        location: "Vellore ENT Centre, Boring Canal Road, Patna",
        consultationFee: "₹700",
        contact: null
    }
];
const cardiologists = [
    {
        name: "Dr. Virendra Prasad Sinha",
        location: "Balaji Heart Center, Boring Road, Opposite J.P Hospital, Patna",
        contact: "+91-612-2570328",
        consultationFee: "₹800"
    },
    {
        name: "Dr. (Maj) Prabhat Kumar",
        location: "Mahavir Vatsalya (Heart) Hospital, LCT Ghat, Manipura, Patna",
        contact: "+91-612-2275657",
        consultationFee: "₹100"
    },
    {
        name: "Dr. Rajiv Krishna",
        location: "Heart Clinic, 18 S.K. Colony, Near Charak Hospital, Malahi Pakri Chowk, Kankarbagh, Patna",
        contact: "+91-93342-42298",
        consultationFee: "₹500"
    },
    {
        name: "Dr. Prabhat Kumar",
        location: "Heart Hospital, Chandralay, Near Central School, Kankarbagh, Patna",
        contact: "+91-612-2346606",
        consultationFee: "₹800"
    },
    {
        name: "Dr. Biswa Bhushan Bharti",
        location: "Shiv Mandir, A/135, opposite Punch, Housing Board Colony, Kankarbagh, Lohia Nagar, Patna",
        contact: "+91-89359-35247",
        consultationFee: "₹800"
    },
    {
        name: "Dr. P.P. Gupta",
        location: "Danapur Cantt, Patna",
        contact: "Information available on request",
        consultationFee: "Information not available"
    },
    {
        name: "Dr. Ajay Kumar",
        location: "Dr. Ajay Kumar Clinic, Kankarbagh, Patna",
        contact: "Available through the clinic",
        consultationFee: "₹200"
    },
    {
        name: "Dr. Sudhir Sharma",
        location: "Shri Hari Jeevan Health Care, Patna",
        contact: "Available through the clinic",
        consultationFee: "₹300"
    }
];

const dermatologists = [
    {
        name: "Dr. Abhijeet Kumar Jha",
        location: "Skin and Hair Clinic, Nbcc Tower, Vijay Nagar, Kankarbagh, Patna",
        contact: "+91-90979-62724",
        consultationFee: "₹500",
        specialization: "Acne, pigmentation, anti-aging treatments, hair transplants"
    },
    {
        name: "Dr. Jyotirmay Bharti",
        location: "Square Root Clinic, Sri Krishna Puri, Patna",
        contact: "+91-90602-92666",
        consultationFee: "₹500",
        specialization: "Cosmetology, hair transplant, laser treatments"
    },
    {
        name: "Dr. Ramanuj Singh",
        location: "Patna",
        contact: "Available on Curofy",
        specialization: "Dermatology"
    },
    {
        name: "Dr. Gopal Prasad",
        location: "Patna",
        contact: "Available on Curofy",
        specialization: "Dermatology"
    },
    {
        name: "Dr. Ranjeet Ranjan Madhukar",
        location: "Patna",
        contact: "Available on Curofy",
        specialization: "Dermatology"
    },
    {
        name: "Dr. Kunal Sinha",
        location: "Prasad Skin Clinic, Kankarbagh, Patna",
        contact: "Available through the clinic",
        consultationFee: "₹500-800",
        specialization: "Dermatology, Hair Transplant Surgery, Scar Treatment, Anti-Aging Treatment"
    },
    {
        name: "Dr. Richa Thakur",
        location: "Ortho & Skin Care Clinic, Raja Bazar, Bailey Road, Patna",
        contact: "Available through the clinic",
        consultationFee: "₹400-800",
        specialization: "Skin diseases, Cosmetic treatments, Chemical Peels, Lasers"
    },
    {
        name: "Dr. Mathura Prasad",
        location: "Dr. Mathura Prasad Clinic, Ashok Raj Path, Opposite PMCH, Patna",
        contact: "Available through the clinic",
        consultationFee: "₹500-1000",
        specialization: "Acne treatment, Dermabrasion, Scar Treatment"
    },
    {
        name: "Dr. Pankaj Tiwary",
        location: "Skin Clinic, Boring Road, Patna",
        contact: "Available through the clinic",
        consultationFee: "₹600-900",
        specialization: "Cosmetic Dermatology, Skin Allergy Treatments"
    },
    {
        name: "Dr. Ravi Vikram Singh",
        location: "Near Kurji, Patna",
        contact: "Available through appointment",
        consultationFee: "₹500-800",
        specialization: "Skin diseases, Cosmetic treatments"
    }
];

const pediatricians = [
    {
        name: "Dr. Anup Kumar",
        location: "Patna Children Hospital & Newborn Care Centre, Kankarbagh, Patna",
        contact: "+91-78578-45792",
        consultationFee: "₹500",
        specialization: "Neonatal Care, Child Development Disease Treatment, Immunization"
    },
    {
        name: "Dr. Tarun Bharthuar",
        location: "Bharthuar Clinic, Gardanibagh, Patna",
        contact: "Available through clinic",
        consultationFee: "₹400",
        specialization: "Child Growth Management",
        experience: "47 years"
    },
    {
        name: "Dr. Rakesh Kumar",
        location: "Shrinivas Hospital, Kankarbagh, Patna",
        contact: "Available through clinic",
        consultationFee: "₹500",
        specialization: "Pediatric Critical Care"
    },
    {
        name: "Dr. Zulfaqar Murtaza",
        location: "Panama Clinic, Ashok Rajpath, Patna",
        contact: "+91-85442-51397",
        consultationFee: "₹500",
        specialization: "Newborn care, Immunization, Infant Nutrition"
    },
    {
        name: "Dr. Mohan Kejriwal",
        location: "Kid Care Clinic, Exhibition Road, Patna",
        contact: "Available through clinic",
        consultationFee: "₹500",
        specialization: "Pediatric Care"
    }
];

const orthopedicSurgeons = [
    {
        name: "Dr. Jaswinder Singh",
        location: "Joint Bone & Dental Clinic, Basement, Parth Plaza, Bailey Road, Sheikhpura, Patna",
        contact: "+91-76781-70084",
        consultationFee: "₹500",
        specialization: "Pediatric orthopedic surgery, joint replacement, deformity correction"
    },
    {
        name: "Dr. Ramakant Kumar",
        location: "Advanced Bone & Joint Clinic, East Boring Canal Road, Patna",
        contact: "+91-70703-12214",
        consultationFee: "₹500",
        specialization: "Hip & knee arthroplasty, trauma management, and advanced orthopedic procedures"
    },
    {
        name: "Dr. Arvind Prasad Gupta",
        location: "Paras HMRI Hospital, Patna",
        contact: "+91-890-439-5588",
        consultationFee: "₹800",
        specialization: "Sports injuries, joint replacement, and arthroscopy"
    },
    {
        name: "Dr. Rajiv Ranjan Sinha",
        location: "Jay Prabha Medanta Super Specialty Hospital, Patna",
        contact: "+91-890-439-5588",
        consultationFee: "₹800",
        specialization: "Joint replacements, arthroscopic knee surgery for sports injuries"
    },
    {
        name: "Dr. Ravi Kumar",
        location: "Ortho Clinic, Opposite Satyam Complex, Patna",
        contact: "+91-93043-17002",
        consultationFee: "₹600",
        specialization: "General orthopedic surgery, trauma care, and sports injuries"
    },
    {
        name: "Dr. Satyendra Kumar",
        location: "City Care Hospital, Kankarbagh, Patna",
        contact: "+91-78879-58898",
        consultationFee: "₹700",
        specialization: "Joint replacement and trauma surgery"
    },
    {
        name: "Dr. Neeraj Kumar",
        location: "Kedar Hospital, Boring Road, Patna",
        contact: "+91-70703-12214",
        consultationFee: "₹500",
        specialization: "Pediatric orthopedics and trauma management"
    },
    {
        name: "Dr. Abhishek Kumar",
        location: "Premier Orthopedic Hospital, Boring Road, Patna",
        contact: "+91-77619-55192",
        consultationFee: "₹600",
        specialization: "Sports injuries, orthopedic trauma"
    },
    {
        name: "Dr. Ashok Kumar",
        location: "Medicity Hospital, Kankarbagh, Patna",
        contact: "+91-77619-55192",
        consultationFee: "₹700",
        specialization: "Joint replacement, orthopedic surgery"
    }
];
const gynecologists = [
    {
        name: "Dr. Manpreet Kaur Singh",
        location: "Kanti Factory Rd, Mahatma Gandhi Nagar, Patna",
        contact: "08521419507",
        consultationFee: "Not available",
        specialty: "Women’s health, pregnancy care"
    },
    {
        name: "Dr. Kavita Singh",
        location: "Near Indian Oil Petrol Pump, Saguna More, Patna",
        contact: "09431293562",
        consultationFee: "Not available",
        specialty: "Complex gynecological issues, infertility"
    },
    {
        name: "Dr. Vinita Pandey",
        location: "Paras HMRI Hospital, Patna",
        contact: "Through hospital booking",
        consultationFee: "₹500",
        specialty: "Obstetrics and gynecology"
    },
    {
        name: "Dr. Nazia Nigar",
        location: "Paras HMRI Hospital, Patna",
        contact: "Through hospital booking",
        consultationFee: "₹350",
        specialty: "General gynecological care"
    },
    {
        name: "Dr. Smriti Sparsh",
        location: "Maatri Women’s Healthcare, Kaliket Nagar, Patna",
        contact: "92641 77701",
        consultationFee: "₹500",
        specialty: "Fertility and pregnancy care"
    }
];





 // Function to retrieve query from URL
 function getQueryParameter(name) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to render the doctor list
function renderDoctors(doctors) {
    const doctorList = document.getElementById('doctorList');
    doctorList.innerHTML = ''; // Clear previous list

    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.classList.add('doctor-card');

        doctorCard.innerHTML = `
            <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <p><strong>Location:</strong> ${doctor.location}</p>
                <p><strong>Specialties:</strong> ${doctor.specialties ? doctor.specialties.join(", ") : "N/A"}</p>
                <p><strong>Experience:</strong> ${doctor.experience || "N/A"}</p>
                <p class="consultation-fee"><strong>Consultation Fee:</strong> ${doctor.consultationFee || "Not specified"}</p>
            </div>
            <div class="doctor-contact">
                <p><strong>Contact:</strong> <span class="contact">${doctor.contact || "Contact info not available"}</span></p>
                <p><strong>Available Timings:</strong> ${doctor.availableTimings || "N/A"}</p>
            </div>
        `;

        doctorList.appendChild(doctorCard);
    });
}

// Extracting the 'type' parameter from the URL (e.g., 'generalPhysician', 'dentists', 'entSpecialists')
const type = getQueryParameter('type');

// Based on the query, load the respective list
if (type === 'generalPhysician') {
    renderDoctors(generalPhysician);
} else if (type === 'dentists') {
    renderDoctors(dentists);
} else if (type === 'entSpecialists') {
    renderDoctors(entSpecialists);
} else if (type === 'pediatricians') {
    renderDoctors(pediatricians);
} else if (type === 'dermatologist') {
    renderDoctors(dermatologists);
}
  else if (type === 'cardiologist') {
        renderDoctors(cardiologists);
} else if (type === 'orthopedic') {
        renderDoctors(orthopedicSurgeons);
} else if (type === 'gynecologists') {
        renderDoctors(gynecologists);
}  else if (type === 'neurologist') {
        renderDoctors(neurologists);}
   else {
    document.getElementById('doctorList').innerHTML = "<p>No doctors found for the specified category.</p>";
}
// JavaScript for the Hamburger Menu toggle
document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
});
