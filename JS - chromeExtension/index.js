let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const leadsFromStorage = JSON.parse( localStorage.getItem("myLeads") )

if(leadsFromStorage){
    myLeads = leadsFromStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function(){
    //chrome API method to get current tab
    chrome.tab.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log( localStorage.getItem("myLeads") )
})


})

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'> 
                    ${leads[i]}
                </a>
            </li>
        `
    // const li = document.createElement("li")
    // li.textContent= myLeads[i]
    // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    //console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    //console.log( localStorage.getItem("myLeads") )
})

