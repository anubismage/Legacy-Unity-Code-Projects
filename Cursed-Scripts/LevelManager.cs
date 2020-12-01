using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;
public class LevelManager : MonoBehaviour {

	public void Play(string Game)
	{ 
		SceneManager.LoadScene (Game);
		Cursor.visible = true;
	}
	public void Exit()
	{ 
		Application.Quit ();
	}
}
