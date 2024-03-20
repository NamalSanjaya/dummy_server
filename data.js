// Active Sites
const activeSites = [
    {
      "SITE_ID": "NS001",
      "NAME": "Namal South ET",
      "STATUS": "ACTIVE",
      "STATUS_UPDATED_DATE": "0000-00-00"
    },
    {
      "SITE_ID": "s002",
      "NAME": "JJYY SP",
      "STATUS": "ACTIVE",
      "STATUS_UPDATED_DATE": "0000-00-00"
    },
    {
      "SITE_ID": "s003",
      "NAME": "HHYY LL",
      "STATUS": "ACTIVE",
      "STATUS_UPDATED_DATE": "0000-00-00"
    },
    {
      "SITE_ID": "s004",
      "NAME": "ETRTRp og",
      "STATUS": "ACTIVE",
      "STATUS_UPDATED_DATE": "0000-00-00"
    }
  ]

// Agreements Ids
const agreementsIds = [
    5, 8, 12, 16
]

const cities = [
  {
    "CITY_NAME": "MALABE",
    "POSTAL_CODE": 10115
  },
  {
    "CITY_NAME": "COLOMBO 10",
    "POSTAL_CODE": 10102
  },
  {
    "CITY_NAME": "GALLE",
    "POSTAL_CODE": 11990
  },
  {
    "CITY_NAME": "KANDY",
    "POSTAL_CODE": 109831
  }
]

const agreementDb = [
  {
      "AGREEMENT_ID": 1,
      "DOCUMENT_ID": 1,
      "SITE_ID": "s002",
      "OWNERSHIP": "Private",
      "GOVERNMENT_LAND_TYPE": "N/A",
      "PRIVATE_LAND_NAME": "Private Land 1",
      "TERMINATION_CLAUSE": "Yes",
      "REQUEST_TYPE": "NMC",
      "SUPPLEMENTARY_CATEGORY": "RAP",
      "AGREEMENT_TYPE": "LA",
      "AGREEMENT_LABEL": "MAIN",
      "MAIN_AGREEMENT_OWNER": "Yes",
      "DATE_OF_COMMENCEMENT": "2022-01-01",
      "DATE_OF_EXPIRY": "2032-01-01",
      "LEASE_PERIOD_MONTHS": 120,
      "LEASE_PERIOD_DAYS": 5,
      "STATUS": "ACTIVE",
      "NEW_AGREEMENT_REFERENCE": "ref001",
      "PREVIOUS_AGREEMENT_REFERENCE": "",
      "EXTERNAL_LAWYER_NAME": "Jane Smith"
  },
  {
      "AGREEMENT_ID": 2,
      "DOCUMENT_ID": 2,
      "SITE_ID": "s003",
      "OWNERSHIP": "Government",
      "GOVERNMENT_LAND_TYPE": "FT",
      "PRIVATE_LAND_NAME": "N/A",
      "TERMINATION_CLAUSE": "No",
      "REQUEST_TYPE": "OC",
      "SUPPLEMENTARY_CATEGORY": "N/A",
      "AGREEMENT_TYPE": "MOU",
      "AGREEMENT_LABEL": "MAIN",
      "MAIN_AGREEMENT_OWNER": "No",
      "DATE_OF_COMMENCEMENT": "2022-02-01",
      "DATE_OF_EXPIRY": "2032-02-01",
      "LEASE_PERIOD_MONTHS": 180,
      "LEASE_PERIOD_DAYS": 10,
      "STATUS": "ACTIVE",
      "NEW_AGREEMENT_REFERENCE": "ref002",
      "PREVIOUS_AGREEMENT_REFERENCE": "ref001",
      "EXTERNAL_LAWYER_NAME": "John Doe"
  },
  {
      "AGREEMENT_ID": 3,
      "DOCUMENT_ID": 3,
      "SITE_ID": "s002",
      "OWNERSHIP": "Government",
      "GOVERNMENT_LAND_TYPE": "LRC",
      "PRIVATE_LAND_NAME": "Private Land 2",
      "TERMINATION_CLAUSE": "Yes",
      "REQUEST_TYPE": "CAR",
      "SUPPLEMENTARY_CATEGORY": "OFNC",
      "AGREEMENT_TYPE": "SA",
      "AGREEMENT_LABEL": "SUPPLEMENTARY",
      "MAIN_AGREEMENT_OWNER": "Yes",
      "DATE_OF_COMMENCEMENT": "2022-03-01",
      "DATE_OF_EXPIRY": "2032-03-01",
      "LEASE_PERIOD_MONTHS": 150,
      "LEASE_PERIOD_DAYS": 15,
      "STATUS": "ACTIVE",
      "NEW_AGREEMENT_REFERENCE": "ref003",
      "PREVIOUS_AGREEMENT_REFERENCE": "ref002",
      "EXTERNAL_LAWYER_NAME": "Alice Johnson"
  },
    {
        "AGREEMENT_ID": 4,
        "DOCUMENT_ID": 4,
        "SITE_ID": "s005",
        "OWNERSHIP": "Private",
        "GOVERNMENT_LAND_TYPE": "N/A",
        "PRIVATE_LAND_NAME": "Private Land 3",
        "TERMINATION_CLAUSE": "No",
        "REQUEST_TYPE": "NMC",
        "SUPPLEMENTARY_CATEGORY": "N/A",
        "AGREEMENT_TYPE": "LA",
        "AGREEMENT_LABEL": "MAIN",
        "MAIN_AGREEMENT_OWNER": "Yes",
        "DATE_OF_COMMENCEMENT": "2022-04-01",
        "DATE_OF_EXPIRY": "2032-04-01",
        "LEASE_PERIOD_MONTHS": 110,
        "LEASE_PERIOD_DAYS": 20,
        "STATUS": "ACTIVE",
        "NEW_AGREEMENT_REFERENCE": "ref004",
        "PREVIOUS_AGREEMENT_REFERENCE": "",
        "EXTERNAL_LAWYER_NAME": "Bob Smith"
    },
    {
        "AGREEMENT_ID": 5,
        "DOCUMENT_ID": 5,
        "SITE_ID": "s002",
        "OWNERSHIP": "Government",
        "GOVERNMENT_LAND_TYPE": "LRC",
        "PRIVATE_LAND_NAME": "N/A",
        "TERMINATION_CLAUSE": "Yes",
        "REQUEST_TYPE": "OC",
        "SUPPLEMENTARY_CATEGORY": "PC",
        "AGREEMENT_TYPE": "SA",
        "AGREEMENT_LABEL": "SUPPLEMENTARY",
        "MAIN_AGREEMENT_OWNER": "No",
        "DATE_OF_COMMENCEMENT": "2022-05-01",
        "DATE_OF_EXPIRY": "2032-05-01",
        "LEASE_PERIOD_MONTHS": 90,
        "LEASE_PERIOD_DAYS": 25,
        "STATUS": "ACTIVE",
        "NEW_AGREEMENT_REFERENCE": "ref005",
        "PREVIOUS_AGREEMENT_REFERENCE": "",
        "EXTERNAL_LAWYER_NAME": "Emily Johnson"
    },
    {
        "AGREEMENT_ID": 6,
        "DOCUMENT_ID": 6,
        "SITE_ID": "s007",
        "OWNERSHIP": "Government",
        "GOVERNMENT_LAND_TYPE": "FT",
        "PRIVATE_LAND_NAME": "Private Land 4",
        "TERMINATION_CLAUSE": "Yes",
        "REQUEST_TYPE": "CAR",
        "SUPPLEMENTARY_CATEGORY": "RAP",
        "AGREEMENT_TYPE": "SLA",
        "AGREEMENT_LABEL": "MAIN",
        "MAIN_AGREEMENT_OWNER": "Yes",
        "DATE_OF_COMMENCEMENT": "2022-06-01",
        "DATE_OF_EXPIRY": "2032-06-01",
        "LEASE_PERIOD_MONTHS": 100,
        "LEASE_PERIOD_DAYS": 30,
        "STATUS": "ACTIVE",
        "NEW_AGREEMENT_REFERENCE": "ref006",
        "PREVIOUS_AGREEMENT_REFERENCE": "",
        "EXTERNAL_LAWYER_NAME": "David Doe"
    },
    {
        "AGREEMENT_ID": 7,
        "DOCUMENT_ID": 7,
        "SITE_ID": "s002",
        "OWNERSHIP": "Government",
        "GOVERNMENT_LAND_TYPE": "DG",
        "PRIVATE_LAND_NAME": "N/A",
        "TERMINATION_CLAUSE": "No",
        "REQUEST_TYPE": "NMC",
        "SUPPLEMENTARY_CATEGORY": "N/A",
        "AGREEMENT_TYPE": "MOU",
        "AGREEMENT_LABEL": "SUPPLEMENTARY",
        "MAIN_AGREEMENT_OWNER": "No",
        "DATE_OF_COMMENCEMENT": "2022-07-01",
        "DATE_OF_EXPIRY": "2032-07-01",
        "LEASE_PERIOD_MONTHS": 80,
        "LEASE_PERIOD_DAYS": 35,
        "STATUS": "ACTIVE",
        "NEW_AGREEMENT_REFERENCE": "ref007",
        "PREVIOUS_AGREEMENT_REFERENCE": "",
        "EXTERNAL_LAWYER_NAME": "Grace Smith"
    }

]

const siteReqDb = [
  {
    "SITE_ID": "s001",
    "RELATED_COMPANY": "DBN",
    "OTHER_OPERATOR": "Mobitel",
    "TITLE_TYPE": "TR",
    "ADDRESS_LINE_1": "123 Main St",
    "ADDRESS_LINE_2": "Apt 1",
    "GN_DEVISION": "Colombo",
    "DEVISIONAL_SECRETARY": "John Doe",
    "LOCAL_AUTHORITY_AREA": "Colombo Municipal Council",
    "POLICE_STATION": "Pettah",
    "TOWER_HEIGHT": 50.5,
    "OIC_NAME": "Alice Smith",
    "OIC_CONTACT": "+98112233445",
    "TOWER_TYPE": "GBT",
    "CITY_ID": "MALABE"
  },
  {
    "SITE_ID": "s002",
    "RELATED_COMPANY": "DAP",
    "OTHER_OPERATOR": "Hutch",
    "TITLE_TYPE": "TD",
    "ADDRESS_LINE_1": "456 Oak St",
    "ADDRESS_LINE_2": "Suite 100",
    "GN_DEVISION": "Galle",
    "DEVISIONAL_SECRETARY": "Jane Doe",
    "LOCAL_AUTHORITY_AREA": "Galle Municipal Council",
    "POLICE_STATION": "Fort",
    "TOWER_HEIGHT": 45.2,
    "OIC_NAME": "Bob Johnson",
    "OIC_CONTACT": "+98112233446",
    "TOWER_TYPE": "RTP",
    "CITY_ID": "GALLE"
  },
  {
    "SITE_ID": "s003",
    "RELATED_COMPANY": "Other",
    "OTHER_OPERATOR": "SLT",
    "TITLE_TYPE": "TR",
    "ADDRESS_LINE_1": "789 Elm St",
    "ADDRESS_LINE_2": "Unit 5",
    "GN_DEVISION": "Kandy",
    "DEVISIONAL_SECRETARY": "Sam Smith",
    "LOCAL_AUTHORITY_AREA": "Kandy Municipal Council",
    "POLICE_STATION": "Kandy",
    "TOWER_HEIGHT": 60.0,
    "OIC_NAME": "Emily Brown",
    "OIC_CONTACT": "+98112233447",
    "TOWER_TYPE": "RTMP",
    "CITY_ID": "KANDY"
  },
  {
    "SITE_ID": "s004",
    "RELATED_COMPANY": "DBN",
    "OTHER_OPERATOR": "N/A",
    "TITLE_TYPE": "TD",
    "ADDRESS_LINE_1": "101 Pine St",
    "ADDRESS_LINE_2": "Apt 2B",
    "GN_DEVISION": "Colombo",
    "DEVISIONAL_SECRETARY": "Sarah Lee",
    "LOCAL_AUTHORITY_AREA": "Colombo Municipal Council",
    "POLICE_STATION": "Kollupitiya",
    "TOWER_HEIGHT": 55.8,
    "OIC_NAME": "Michael Johnson",
    "OIC_CONTACT": "+98112233448",
    "TOWER_TYPE": "RTT",
    "CITY_ID": "COLOMBO 10"
  },
  {
    "SITE_ID": "s005",
    "RELATED_COMPANY": "DAP",
    "OTHER_OPERATOR": "Mobitel",
    "TITLE_TYPE": "TR",
    "ADDRESS_LINE_1": "234 Cedar St",
    "ADDRESS_LINE_2": "Unit 10",
    "GN_DEVISION": "Galle",
    "DEVISIONAL_SECRETARY": "David Lee",
    "LOCAL_AUTHORITY_AREA": "Galle Municipal Council",
    "POLICE_STATION": "Matara",
    "TOWER_HEIGHT": 48.3,
    "OIC_NAME": "Jessica Taylor",
    "OIC_CONTACT": "+98112233449",
    "TOWER_TYPE": "RTGM",
    "CITY_ID": "MALABE"
  },
  {
    "SITE_ID": "s006",
    "RELATED_COMPANY": "Other",
    "OTHER_OPERATOR": "Hutch",
    "TITLE_TYPE": "TD",
    "ADDRESS_LINE_1": "567 Maple St",
    "ADDRESS_LINE_2": "Apt 3C",
    "GN_DEVISION": "Kandy",
    "DEVISIONAL_SECRETARY": "Emma Brown",
    "LOCAL_AUTHORITY_AREA": "Kandy Municipal Council",
    "POLICE_STATION": "Katugastota",
    "TOWER_HEIGHT": 51.6,
    "OIC_NAME": "William Smith",
    "OIC_CONTACT": "+98112233450",
    "TOWER_TYPE": "GBT",
    "CITY_ID": "GALLE"
  }
]

const landOwnerDb = [
  {
    "OWNER_ID": 1,
    "AGREEMENT_ID": 1,
    "NAME": "John Doe",
    "IS_OWNER": true,
    "NIC_BRC_SELECTION": "NIC",
    "NIC_BRC_NUMBER": "123456789V",
    "ADDRESS": "123 Main St",
    "CONTACT_RESIDENT": "+981122127272",
    "CONTACT_MOBILE": "+981176432",
    "NIC_BRC_COPY_APP_UID": 456789,
    "CITY_ID": "MALABE"
  },
  {
    "OWNER_ID": 2,
    "AGREEMENT_ID": 1,
    "NAME": "Alice Smith",
    "IS_OWNER": false,
    "NIC_BRC_SELECTION": "BRC",
    "NIC_BRC_NUMBER": "BRC123456",
    "ADDRESS": "456 Oak St",
    "CONTACT_RESIDENT": "+981122334455",
    "CONTACT_MOBILE": "+981176543",
    "NIC_BRC_COPY_APP_UID": 987654,
    "CITY_ID": "GALLE"
  },
  {
    "OWNER_ID": 3,
    "AGREEMENT_ID": 1,
    "NAME": "Bob Johnson",
    "IS_OWNER": true,
    "NIC_BRC_SELECTION": "NIC",
    "NIC_BRC_NUMBER": "987654321V",
    "ADDRESS": "789 Elm St",
    "CONTACT_RESIDENT": "+981122334466",
    "CONTACT_MOBILE": "+981176654",
    "NIC_BRC_COPY_APP_UID": 159753,
    "CITY_ID": "KANDY"
  },
    {
      "OWNER_ID": 4,
      "AGREEMENT_ID": 3,
      "NAME": "Emma Brown",
      "IS_OWNER": true,
      "NIC_BRC_SELECTION": "NIC",
      "NIC_BRC_NUMBER": "456789012V",
      "ADDRESS": "101 Pine St",
      "CONTACT_RESIDENT": "+981122334477",
      "CONTACT_MOBILE": "+981176765",
      "NIC_BRC_COPY_APP_UID": 357159,
      "CITY_ID": "COLOMBO"
    },
    {
      "OWNER_ID": 5,
      "AGREEMENT_ID": 3,
      "NAME": "David Lee",
      "IS_OWNER": false,
      "NIC_BRC_SELECTION": "BRC",
      "NIC_BRC_NUMBER": "BRC987654",
      "ADDRESS": "234 Cedar St",
      "CONTACT_RESIDENT": "+981122334488",
      "CONTACT_MOBILE": "+981176876",
      "NIC_BRC_COPY_APP_UID": 951753,
      "CITY_ID": "KANDY"
    },
    {
      "OWNER_ID": 6,
      "AGREEMENT_ID": 2,
      "NAME": "Emily Taylor",
      "IS_OWNER": true,
      "NIC_BRC_SELECTION": "NIC",
      "NIC_BRC_NUMBER": "654321098V",
      "ADDRESS": "567 Maple St",
      "CONTACT_RESIDENT": "+981122334499",
      "CONTACT_MOBILE": "+981176987",
      "NIC_BRC_COPY_APP_UID": 753951,
      "CITY_ID": "GALLE"
    },
    {
      "OWNER_ID": 7,
      "AGREEMENT_ID": 2,
      "NAME": "Jack Johnson",
      "IS_OWNER": false,
      "NIC_BRC_SELECTION": "BRC",
      "NIC_BRC_NUMBER": "BRC123123",
      "ADDRESS": "890 Oak St",
      "CONTACT_RESIDENT": "+981122334400",
      "CONTACT_MOBILE": "+981177098",
      "NIC_BRC_COPY_APP_UID": 159357,
      "CITY_ID": "MALABE"
    },
    {
      "OWNER_ID": 8,
      "AGREEMENT_ID": 4,
      "NAME": "Sophia Brown",
      "IS_OWNER": true,
      "NIC_BRC_SELECTION": "NIC",
      "NIC_BRC_NUMBER": "987654321V",
      "ADDRESS": "111 Elm St",
      "CONTACT_RESIDENT": "+981122334411",
      "CONTACT_MOBILE": "+981177109",
      "NIC_BRC_COPY_APP_UID": 357951,
      "CITY_ID": "KANDY"
    }
  
]


module.exports = {
    activeSites,
    agreementsIds,
    cities,
    agreementDb,
    siteReqDb,
    landOwnerDb
};
