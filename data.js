// Active Sites
const activeSites = [
    {
      "SITE_ID": "NS001",
      "NAME": "Namal South ET",
      "STATUS": "ACTIVE",
      "STATUS_UPDATED_DATE": "0000-00-00"
    },
    {
      "SITE_ID": "KKPP11",
      "NAME": "JJYY SP",
      "STATUS": "ACTIVE",
      "STATUS_UPDATED_DATE": "0000-00-00"
    },
    {
      "SITE_ID": "KK123",
      "NAME": "HHYY LL",
      "STATUS": "ACTIVE",
      "STATUS_UPDATED_DATE": "0000-00-00"
    },
    {
      "SITE_ID": "KK19",
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
      "GOVERNMENT_LAND_TYPE": "Permit",
      "PRIVATE_LAND_NAME": "Private Land 1",
      "TERMINATION_CLAUSE": "Yes",
      "REQUEST_TYPE": "NMC",
      "SUPPLEMENTARY_CATEGORY": "Road Access Path",
      "AGREEMENT_TYPE": "Lease Agreement",
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
      "GOVERNMENT_LAND_TYPE": "Forest",
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
      "SITE_ID": "s004",
      "OWNERSHIP": "Private | Goverment",
      "GOVERNMENT_LAND_TYPE": "Permit | LRC",
      "PRIVATE_LAND_NAME": "Private Land 2",
      "TERMINATION_CLAUSE": "Yes",
      "REQUEST_TYPE": "CAR",
      "SUPPLEMENTARY_CATEGORY": "OFN Cable",
      "AGREEMENT_TYPE": "Supplementary Agreement",
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
  }
]


module.exports = {
    activeSites,
    agreementsIds,
    cities,
    agreementDb
};
