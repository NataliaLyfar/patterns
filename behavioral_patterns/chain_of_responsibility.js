// this pattern resembles the use of middleware in Node.js
// consider a simple example
function AppleProcess (req) {
    if(req.payload === "apple") {
        console.log("Processing Apple");
    }
}

function OrangeProcess(req) {
    if(req.payload === "orange") {
        console.log("Processing Orange");
    }
}

function MangoProcess(req) {
    if(req.payload === "mango") {
        console.log("Processing Mango");
    }
}
const chain = [AppleProcess, OrangeProcess, MangoProcess];

// we made 3 handler fuctions and placed them in the chain array
// next, we wil create a processRequest function and run through the chain with a test request
function processRequest(chain, request) {
    let lastResult = null;
    let i = 0;
    chain.forEach(func => {
        func(request);
    });
}
let sampleMangoRequest = {
    payload: "mango"
};
processRequest(chain, sampleMangoRequest);