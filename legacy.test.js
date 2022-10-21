"@fixture Simple test";
"@page about:blank";

"@test"["Succeeded test"] = {
    "1. Success": function () {
        ok(true);
    }
};

"@test"["Failed test"] = {
    "1. Fail": function () {
        ok(false);
    }
};
