let preview_check = document.querySelector("input.check_image_preview")
let preview_check_div = document.querySelector("div#preview_img_radio")
let img_url = document.querySelector("input#img_url")
let preview_img_image = document.querySelector("img#preview_img_image")
let preview_img_div = document.querySelector("div#preview-img")

// For the edit post option, the image_url value can be present before any input
if (img_url.value != "") {
    preview_check_div.style.display = 'block';
} else {
    preview_check_div.style.display = 'none';
}

// Whenever img_url value is obtained, show the check button 
img_url.addEventListener("input", () => {
    if (img_url.value != "") {
        preview_check_div.style.display = 'block';
    } else {
        preview_check_div.style.display = 'none';
        preview_img_div.style.display = 'none'
        preview_check.checked = false   // To uncheck the preview button when img_url values is empty
    }
})

// To check whether the check button is enabled or not
preview_check.addEventListener("input", () => {
    if (preview_check.checked) {
        preview_img_div.style.display = 'block'
        preview_img_image.src = img_url.value;   // If enabled, preview the image
    } else {
        preview_img_div.style.display = 'none'  // else, not
    }
})