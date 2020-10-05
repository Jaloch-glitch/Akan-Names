function submit() {
    const daysOfTheWeek = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const maleNames = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"]

    const month = parseInt(document.getElementById("month").value)
    const name = (document.getElementById("name").value)
    const year =parseInt(document.getElementById("year").value)
    const day = parseInt(document.getElementById("day").value)
    const dateOfBirth = new Date(year + "." + month + "." + day)
    const answer  = dateOfBirth.getDay()
    const output = document.getElementById("output")
    const male = document.getElementById("male")
    const female = document.getElementById("female")

    if ((year < 0) || (year > 2020)) {
        output.style.background ="blue"
        output.style.color= "red"
        output.innerHTML = "Hello " + " "+ name  + " " + " please enter a valid year! "
    }

