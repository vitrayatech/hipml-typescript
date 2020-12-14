// lib/app.ts
import express = require('express');
import {HIPMLService} from "./hipml/HIPMLService";
import fs from 'fs';
// Create a new express application instance
const app: express.Application = express();
app.use(express.json());

var pml_location = 'app/pmls/';

app.get('/', function (req, res) {
    res.send("I'm working fine :) PML");
});

app.get('/pml/:pmlId/variables', function (req, res) {
    let himplSvc: HIPMLService;
    let policy_variables;
    let pml_identifier = req.params.pmlId;
    let file_path = pml_location + pml_identifier + ".pml";
    console.log(file_path);
    try {
        let newText = fs.readFileSync(file_path, 'utf-8');
        // console.log(newText);
        himplSvc = new HIPMLService(newText);
        policy_variables = himplSvc.getAllPolicyVariables();
        // console.log(policy_variables);
        res.json({"success": true, data: {"variables": policy_variables}})
    } catch (e) {
        console.log(e);
        res.json({
            "success": false,
            "message": {"code": "vt.pml.001", "text": "PML doesn't exist with the provided Identifier"}
        })
    }
    res.send();
});

app.post('/pml/:pmlId/run', function (req, res) {
    let himplSvc: HIPMLService;
    let pml_execution_result;
    let pml_identifier = req.params.pmlId;
    // let hipmlText = map.get(pml_identifier);
    let file_path = pml_location + pml_identifier + ".pml";
    console.log(file_path);
    try {
        let newText = fs.readFileSync(file_path, 'utf-8');
        himplSvc = new HIPMLService(newText);
        let requestDataForPMLExecution = req.body;
        pml_execution_result = himplSvc.getPolicy(requestDataForPMLExecution);
        // console.log(pml_execution_result);
        res.json({"success": true, data: pml_execution_result})
    } catch (e) {
        console.log(e)
        res.json({
            "success": false,
            "message": {"code": "vt.pml.001", "text": "PML doesn't exist with the provided Identifier"}
        })
    }
    res.send();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
