using UnityEngine;

public class Target : MonoBehaviour {
    public float health =30f;

    public void TakeDamage (float amount){

        health-=amount;
        if(health<=0f){
            Die();

        }

    }
    void Die(){

        Debug.Log("THISMUTHERFUCKERDIEDdead");

        Destroy(gameObject);

    }

}
