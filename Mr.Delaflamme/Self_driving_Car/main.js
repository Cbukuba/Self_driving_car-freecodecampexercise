const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);

animate();

function animate(){
	car.update();
	canvas.height = window.innerHeight;
	// De cette manière les positions précedentes ne sont pas enregistrées et la voiture garde sa taille tout en avançant
	car.draw(ctx);
	requestAnimationFrame(animate);
}