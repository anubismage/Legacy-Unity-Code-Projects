using UnityEngine;
using System.Collections;
using UnityStandardAssets.Characters.FirstPerson;

public class PauseScript : MonoBehaviour {
	public Transform canvas;
	public Transform Player;
	private  UnityStandardAssets.Characters.FirstPerson.FirstPersonController firstMoveScript;	

	void Start (){
		firstMoveScript = Player.gameObject.GetComponent<UnityStandardAssets.Characters.FirstPerson.FirstPersonController> ();
	}

	void Update () {
		if (Input.GetKeyDown(KeyCode.Escape))
		{ 
			Pause ();
	    }
	
}
	public void Pause()
	{ 
		if (canvas.gameObject.activeInHierarchy == false)
		{ 
			canvas.gameObject.SetActive (true);
			Time.timeScale = 0;

			firstMoveScript.enabled = false;
			Cursor.visible = true;
		} else 
		{
			canvas.gameObject.SetActive (false);
			Time.timeScale = 1;
		
			firstMoveScript.enabled = true;
			Cursor.visible = false;
		}
	}
}