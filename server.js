const express = require('express');
const app = express();
const { activeSites, agreementsIds, cities } = require("./data")

app.use(express.json());

// Dummy dbs
const agreementDb = []
const landOwnerDb = []
const payeeDb = []
const commTermsDb = []

// Dummy Automatic increment IDs
let agreementIdNo = 1
let landOwnerNo = 1

// Agreements
app.get('/agreements/:id', (req, res) => {
    const agrId = parseInt(req?.params?.id, 10)
    const agreement = agreementDb.find( agr => agr.AGREEMENT_ID === agrId ) || {}
    res.send({data: agreement, msg: "Ok"});
});

app.post('/agreements', (req, res) => {
    let agr = req.body || {};
    agr.AGREEMENT_ID = agreementIdNo
    agreementIdNo++
    agreementDb.push(agr)
    res.send({msg: "ok", data: { id: agreementIdNo-1}});
});

// Land Owner Resource
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
    res.send({msg: "ok", data: { id: landOwnerNo-1}});
});

// Payee Resource
app.get('/payees/:id', (req, res) => {
    res.send({data: payeeDb[0], msg: "Ok"});
});

app.post('/payees', (req, res) => {
    const payee = req.body || {};
    payeeDb.push(payee)
    res.send({msg: "ok", resource: "Payee"});
});

// Commerial Terms Resource
app.get('/comm-terms/:id', (req, res) => {
    res.send({data: commTermsDb[0], msg: "Ok"});
});

app.post('/comm-terms', (req, res) => {
    const commTerms = req.body || {};
    commTermsDb.push(commTerms)
    res.send({msg: "ok", resource: "Commerial Terms"});
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

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
