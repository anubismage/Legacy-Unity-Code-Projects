#pragma strict
var speed : float;
var rotAngle : float;

function Update () {
	var moveValue = Input.GetAxis("Vertical") * speed * Time.deltaTime;
	var rotateValue = Input.GetAxis("Horizontal") * rotAngle * Time.deltaTime;
	
	transform.Translate(0, 0, moveValue);
	transform.Rotate(0, rotateValue, 0);
}
