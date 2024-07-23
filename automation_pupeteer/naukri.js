const puppeteer = require('puppeteer');

( async () => { const browser = await puppeteer.launch({headless:false, defaultViewport : null});
const page = await browser.newPage();

await page.goto('https://naukri.com');

await page.waitForTimeout(5000);
//console.log(page.locator('a #login_Layer'));
//await page.locator('a #login_Layer').click(); //not working
//const login = 
await page.$('#login_Layer')
//console.log("found the anchor");
.then(async (el) => { 
    await el.click()
    .then(async () => {
        console.log("clicked the anchor");
        const selector = 'input[placeholder="Enter your active Email ID / Username"]';
        //console.log("")
        await page.waitForSelector(selector);
        //const email = await page.$(selector);
        console.log("got the email input");
        await page.type(selector, '', { delay:100 });

        const selector2 = 'input[type="password"]';
        await page.waitForSelector(selector2);
        await page.type(selector2, '', { delay:100 });

        await page.waitForTimeout(5000);

        //const submit = 'button[type="submit"]';
        const loginButton = await page.$('.loginButton')
        
        if(loginButton){
            await loginButton.click();
        }
        else{
            console.log("got an error while looking for login button");
        }
        await page.waitForNavigation(); 
        //const completeProfile = await page.$('.view-profile-wrapper"]'); -  working
        await page.waitForTimeout(5000);
        //const completeProfile = 
        await page.$('a[href="PUT IN respective value for anchor tag on home button, refrence - complete profile"]').then(async (ele) => {
            console.log(ele);
            await ele.click().then(()=> console.log("Congrats you got the profile"))
        }).catch((err)=> console.log("error while fetching the profile", err))

        await page.waitForNavigation(); 

        await page.waitForTimeout(5000);

        await page.$('input[value="Update resume"]').then(async (ele) => {
            await ele.click().then(() => {}).catch((err) => {})
        })
        .catch((err) => {
            console.log("Error while fetching the input button field of update resume", err);
        })
        

        // if(completeProfile){
        //     completeProfile.click().then(()=> {
        //         console.log("Congrats you got the profile");
        //     })
        // }
        // else{
        //     console.log("Error while fetching the profile");
        // }
        //await submit.click();


    })
    .catch((err) => {
        console.log(err);
    })

})
.catch((err) => console.log(err));

// if(login){
//     await login.click()
// }
// else


//then((el) => el.click()).catch((err) => console.log(err));

//await page.type 

//await browser.close();

})()