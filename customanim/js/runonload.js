
function runOnLoad(f) {
    if (runOnLoad.loaded) f();    // If already loaded, just invoke f() now.
    else runOnLoad.funcs.push(f); // Otherwise, store it for later
}

runOnLoad.funcs = []; // The array of functions to call when the document loads
runOnLoad.loaded = false; // The functions have not been run yet.

// Run all registered functions in the order in which they were registered.
// It is safe to call runOnLoad.run() more than once: invocations after the
// first do nothing. It is safe for an initialization function to call
// runOnLoad() to register another function.
runOnLoad.run = function() {
    if (runOnLoad.loaded) return;  // If we've already run, do nothing

    for(var i = 0; i < runOnLoad.funcs.length; i++) {
        try { runOnLoad.funcs[i](); }
        catch(e) { /* An exception in one function shouldn't stop the rest */ }
    }
    
    runOnLoad.loaded = true; // Remember that we've already run once.
    delete runOnLoad.funcs;  // But don't remember the functions themselves.
    delete runOnLoad.run;    // And forget about this function too!
};

// Register runOnLoad.run() as the onload event handler for the window
if (window.addEventListener)
    window.addEventListener("load", runOnLoad.run, false);
else if (window.attachEvent) window.attachEvent("onload", runOnLoad.run);
else window.onload = runOnLoad.run;