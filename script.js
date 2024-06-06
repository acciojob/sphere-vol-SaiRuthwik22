function volume_sphere() {
    let radius = document.getElementById("radius").value;
    let radiusNum = Number(radius);
    
    if (!isNaN(radiusNum) && radiusNum >= 0) {
        let volume = (4/3) * Math.PI * Math.pow(radiusNum, 3);
        document.getElementById("volume").value = volume.toFixed(4);
    } else {
        document.getElementById("volume").value = NaN;
    }
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
