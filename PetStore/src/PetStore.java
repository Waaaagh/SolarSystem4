
import java.util.ArrayList;

/**
 * Model of our pet store.
 * a.k.a. Driver program to test our Pet class :)
 *
 * @author 
 */
public class PetStore {

    /** Application entry point */
    public static void main(String[] args) {

//        ArrayList<Pet> pets = new ArrayList<Pet>();
//
//        System.out.println("");
//        System.out.println("--- Our pets ---");
//
//        pets.add(new Pet("Dog", "George"));
//        pets.add(new Pet("Cat", "Jamuga"));
//        pets.add(new Pet("Dragon", "George"));
//        pets.add(new Pet("Hamster", "Rambo", 2));
//        
//        for (Pet pet : pets) {
//            System.out.println(pet);
//        }
        
       
        Pet dog = new Pet("Dog", "Coco");
        System.out.println("My Dog's name is: " + dog.getName());
        // what will this print out?
        // 
        System.out.println("Dog object is:  " + dog);

    }
}
