#pragma strict
private var colourScript : UnityStandardAssets.ImageEffects.VignetteAndChromaticAberration;
private var stopStart : boolean = false;
//UnityStandardAssets.Characters.FirstPerson
function Start() {
	colourScript = GetComponent(UnityStandardAssets.ImageEffects.VignetteAndChromaticAberration);
	
	
	
}

function Update () {
	if(!stopStart)
	ColourEffect();
}

function ColourEffect() {
	colourScript.intensity = Mathf.Lerp(1, 0.3, 5);
	//colourScript.chromaticAberration = Mathf.Lerp(15, 0.1, 4); //smooth out  this
	yield WaitForSeconds(2);
	if (colourScript.intensity == 0.3)
	{
	colourScript.intensity = Mathf.Lerp(0.3, 0.6, 2.5);
	colourScript.chromaticAberration = Mathf.Lerp(15, 0.1, 4);
	//yield WaitForSeconds(1.5);
	 }
	 if (colourScript.intensity == 0.6)
	{
	colourScript.intensity = Mathf.Lerp(0.6, 0.03, 2);
	yield WaitForSeconds(2);
	stopStart = true;
	}
}