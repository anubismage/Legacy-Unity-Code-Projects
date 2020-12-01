#pragma strict

var player : Transform;
var bloodMaggots : GameObject[];
var playerDetectDist : float;
var playerDieDist : float;
var witchLight : Light;
var fpsController : GameObject;
//var playerMusic : AudioSource;
var shitting : boolean = true;
private var pausing : boolean= false;
private var witchStoneRange : float;
private var playerFaceScript : PlayerInterface;
//private var enemyAnim : Animator;
private var firstMoveScript : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
private var idle : float = 1;
private var slither : float;
var ShitCode : String;

static var gameOver : boolean = false;

function Start () {
	gameOver = false;

	//playerMusic = GetComponent(AudioSource);
	playerFaceScript = player.GetComponent(PlayerInterface);
	witchStoneRange = witchLight.range;
	firstMoveScript = fpsController.GetComponent(UnityStandardAssets.Characters.FirstPerson.FirstPersonController);



	Invoke("EnableFPS", 2);
	//
	//Invoke("Shitting", 2);
	//Invoke("Shitting2", 3);
}

function Update () {
	for(var i : int; i < bloodMaggots.Length; i++)
	{
	var enemyAnim = bloodMaggots[i].GetComponent(Animator);
	var maggotDist = bloodMaggots[i].transform.position - transform.position;
	var maggotNavSys = bloodMaggots[i].GetComponent(UnityEngine.AI.NavMeshAgent);


	if(playerFaceScript.haveStone)
	{
		if(maggotDist.magnitude <= playerDetectDist)
		{
		//enemy.transform.rotation.x= Mathf.Clamp(enemy.transform.rotation.x, enemy.transform.rotation.x, enemy.transform.rotation.x);
		//enemy.transform.rotation.z = Mathf.Clamp(enemy.transform.rotation.z, enemy.transform.rotation.z, enemy.transform.rotation.z);

		bloodMaggots[i].transform.LookAt(transform.position);

		enemyAnim.SetFloat("Idle", 0);
		enemyAnim.SetFloat("Slither", 1);

		maggotNavSys.SetDestination(new Vector3(transform.position.x, bloodMaggots[i].transform.position.y, transform.position.z));
		Retreat(enemyAnim);
		}

	}

	var playerMaggotDist = bloodMaggots[i].transform.position - player.position;

	if(playerFaceScript.haveStone)
	{
	 if(playerMaggotDist.magnitude <= playerDieDist)
	 {
		gameOver = true;

	 }
	}
	else
	{
		if(maggotDist.magnitude <= witchLight.range)
		{
		bloodMaggots[i].transform.LookAt(transform.position);

		enemyAnim.SetFloat("Idle", 0);
		enemyAnim.SetFloat("Slither", 1);

		maggotNavSys.SetDestination(new Vector3(transform.position.x, bloodMaggots[i].transform.position.y, transform.position.z));
		}

		if(maggotDist.magnitude > witchLight.range)
		{
		enemyAnim.SetFloat("Idle", 1);
		enemyAnim.SetFloat("Slither", 0);

		}


	}

	if(maggotDist.magnitude < 5)
	{
		enemyAnim.SetFloat("Idle", 1);
		enemyAnim.SetFloat("Slither", 0);
	}

	if(gameOver)
	{
	GameOver();
	}
	}



	if(pausing)
	{
	var a = playerFaceScript.t1;
	playerFaceScript.enabled = false;
	}
	if(pausing && playerFaceScript.enabled == false)
	{
	playerFaceScript.enabled = true;
	playerFaceScript.t1 = a;
	pausing =false;
	}

}

function Retreat (enemyAnim : Animator) {
	if(playerFaceScript.unReachable)
	{
	yield WaitForSeconds(5);

	enemyAnim.SetFloat("Idle", 1);
	enemyAnim.SetFloat("Slither", 0);

	}
}

function EnableFPS () {
	firstMoveScript.enabled = true;
}

function GameOver () {
	//print("working");
//	playerMusic.enabled = true;
	//yield WaitForSeconds(3.5);
	Application.LoadLevel("Dead");
}

function Shitting () {
	
	pausing = true;
	//}

}
function Shitting2 () {
	
	pausing = true;
	//}

}

