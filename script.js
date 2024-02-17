window.addEventListener('DOMContentLoaded', (event) =>{
    getVisit();
})

const functionApi = '';

const getVisit = () => {
    let count = 5;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("web called function");
        count = response.count
        document.getElementById("countJs").innerText = count
    }).catch(function(error){
        console.log(error);
    });
    return count;
}