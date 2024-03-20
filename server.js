const express = require('express');
const app = express();
const { activeSites, agreementsIds, cities, agreementDb, siteReqDb, landOwnerDb, payeeDb } = require("./data")

app.use(express.json());

// Dummy dbs
const commTermsDb = []

// Dummy Automatic increment IDs
let agreementIdNo = agreementDb.length + 1
let landOwnerNo = landOwnerDb.length + 1
let payeeNo = payeeDb.length + 1
let commeTermsNo = 1
let siteReqNo = siteReqDb.length + 1

// Site req
app.get('/site-req/:siteId', (req, res) => {
    const siteId = req?.params?.siteId
    const siteReqInfo = siteReqDb.find( site => site.SITE_ID === siteId ) || {}
    res.send({data: siteReqInfo, msg: "Ok"});
});

app.post('/site-req', (req, res) => {
    let siteBody = req.body || {};
    siteReqNo++
    siteReqDb.push(siteBody)
    res.send({msg: "ok", data: { id: siteReqNo-1 }});
});

// Agreements
app.get('/agreements/sites/:siteId', (req, res) => {
    const siteId = req?.params?.siteId || ""
    const result = agreementDb.filter( agr => agr.SITE_ID === siteId)
    res.send({data: result, msg: "Ok"});
});

app.get('/agreements/:id', (req, res) => {
    const agrId = parseInt(req?.params?.id, 10)
    const agreement = agreementDb.find( agr => agr.AGREEMENT_ID === agrId ) || {}
    res.send({data: agreement, msg: "Ok"});
});

app.put('/agreements/:id', (req, res) => {
    let reqBody = req.body || {};
    const agrId = parseInt(req?.params?.id, 10)
    let agreement = {}
    let matchedIndex = -1
    let count = 0

    for(const each of agreementDb) {
        if(each.AGREEMENT_ID === agrId ){
            agreement = each
            matchedIndex = count
        }
        count++
    }
    if(matchedIndex === -1) {
        res.status(404).send({data: {}, msg: "agreement not found"});
        return
    }
    let newAgreement = { ...agreement, ...reqBody }
    agreementDb[matchedIndex] = newAgreement
    res.send({data: newAgreement, msg: "Ok"});
});

app.post('/agreements', (req, res) => {
    let agr = req.body || {};
    agr.AGREEMENT_ID = agreementIdNo
    agreementIdNo++
    agreementDb.push(agr)
    res.send({msg: "ok", data: { id: agr.AGREEMENT_ID }});
});

// Land Owner Resource
app.get('/landOwners/agreements/:agrId', (req, res) => {
    const agrId = parseInt(req?.params?.agrId, 10)
    const ownerList = landOwnerDb.filter( owner => owner.AGREEMENT_ID === agrId )
    res.send({data: ownerList, msg: "Ok"});
});

app.get('/landOwners/:id', (req, res) => {
    const ownerId = parseInt(req?.params?.id, 10)
    const ownerInfo = landOwnerDb.find( owner => owner.OWNER_ID === ownerId ) || {}
    res.send({data: ownerInfo, msg: "Ok"});
});

app.post('/landOwners', (req, res) => {
    let ownerRecord = req.body || {};
    ownerRecord.OWNER_ID = landOwnerNo
    landOwnerNo++
    landOwnerDb.push(ownerRecord)
    res.send({msg: "ok", data: { id: ownerRecord.OWNER_ID }});
});

// Payee Resource
app.get('/payees/agreements/:agrId', (req, res) => {
    const agrId = parseInt(req?.params?.agrId, 10)
    const payeeList = payeeDb.filter( payee => payee.AGREEMENT_ID === agrId )
    res.send({data: payeeList, msg: "ok" });
});

app.get('/payees/:id', (req, res) => {
    const payeeId = parseInt(req?.params?.id, 10)
    const payeeInfo = payeeDb.find( payee => payee.PAYEE_ID === payeeId ) || {}
    res.send({data: payeeInfo, msg: "ok" });
});

app.post('/payees', (req, res) => {
    const payee = req.body || {};
    payee.PAYEE_ID = payeeNo
    payeeNo++
    payeeDb.push(payee)
    res.send({msg: "ok", data: { id: payee.PAYEE_ID } });
});

// Commerial Terms Resource
app.get('/comm-terms/:id', (req, res) => {
    const agreementId = parseInt(req?.params?.id, 10)
    const commTermInfo = commTermsDb.find( commTerm => commTerm.AGREEMENT_ID === agreementId ) || {}
    res.send({data: commTermInfo, msg: "ok" });
});

app.post('/comm-terms', (req, res) => {
    const commTerm = req.body || {};
    commeTermsNo++
    commTermsDb.push(commTerm)
    res.send({msg: "ok", data: { id: commeTermsNo-1 } });
});

// Get agreements ids for a site id
app.get('/sites/:id/agreements/ids', (req, res) => {
    // no
    if(req.params.id === "NS001") {
        res.send({data: []});
        return
    }

    res.send({data: agreementsIds})
});

// List Active Sites
app.get('/sites/active', (req, res) => {
    res.send({data: activeSites});
});


// List cities
app.get('/cities', (req, res) => {
    res.send({data: cities});
});

app.get('/cities/:cityId', (req, res) => {
    const id = req?.params?.cityId
    const info = cities.find( city => city.CITY_NAME === id) || {}
    res.send({ data: info, msg: "ok" });
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
