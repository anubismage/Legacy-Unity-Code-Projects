using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class EnemyScript : MonoBehaviour
{
    public Camera cam;
    public NavMeshAgent agent;
    public GameObject player;
    public bool detect = false;
    public float edp = 10;
    // Start is called before the first frame update


    // Update is called once per frame
    void Update()
    {
        if (detect == true)
        { 
            
            agent.SetDestination(player.transform.position);
            
        }
    }


    private void OnTriggerEnter(Collider other)
    {
        Debug.Log("REEEEEEEEEEEE");
        detect = true;
        if (other.gameObject == GameObject.FindGameObjectWithTag("player"))
        {
            Debug.Log("dps");

            other.gameObject.GetComponent<workmove>().TakeDamage(10);
        }
    }


    private void OnTriggerExit(Collider other)
    {
    }
    /*

    public void TakeDamage(float amount)
    {

        health -= amount;
        if (health <= 0f)
        {
           
            Die();

        }

    }
    void Die()
    {
        Debug.Log("dead");
        Destroy(gameObject);

    }


    */
}
