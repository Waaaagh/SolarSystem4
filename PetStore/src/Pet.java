
/**
 * Model for pets we have for sale or adoption in our store.
 * 
 * @author   
 * @version  
 */
public class Pet {

    //-----------------------------------------------------------------
    //      F i e l d s
    //-----------------------------------------------------------------
    private String species;     // Species of this pet (dog, cat, etc)
    private String name;        // Name of this pet
    private int age;            // Age of this pet, in years

    //-----------------------------------------------------------------
    //      C o n s t r u c t o r s
    //-----------------------------------------------------------------
    /** Constructor for objects of class Pet */
    public Pet() {
        // initialise instance variables
        species = "Unknown";
        name = "Who knows";
        age = 3;
    }

    /** Convenience constructor, given species and name
     * @param newSpecies
     * @param newName */
    public Pet(String newSpecies, String newName) {
        setSpecies(newSpecies);
        setName(newName);
        age = 3;
    }

    /** Another Convenience constructor, given species, name and age
     * @param newSpecies
     * @param newName
     * @param newAge */
    public Pet(String newSpecies, String newName, int newAge) {
        setSpecies(newSpecies);
        setName(newName);
        setAge(newAge);
    }

    //-----------------------------------------------------------------
    //      A c c e s s o r s
    //-----------------------------------------------------------------
    /** Return this cute little pet's name
     * @return  */
    public String getName() {
        return name;
    }

    /** Get the species of this pet
     * @return  */
    public String getSpecies() {
        return species;
    }

    /** Return the age of this pet
     * @return age This is the age of my pet */
    public int getAge() {
        return age;
    }

    //-----------------------------------------------------------------
    //      M u t a t o r s
    //-----------------------------------------------------------------
    /** Set the name of this pet
     * @param newName this is the new name of my cute little pet
     *  */
    public void setName(String newName) {
        // ignore empty request
        if (newName == null) {
            return;
        }
        // ignore silly request
        if (newName.equals("RumpelStiltSkin")) {
            return;
        }
        // go ahead and set the name
        name = newName;
    }

    /** Set the species of a pet
     * @param newValue */
    public void setSpecies(String newValue) {
        // put your code here, for allowed species ...
        species = newValue;
    }

    /** Set the age of this pet
     * @param newAge */
    public void setAge(int newAge) {
        // ignore too old or too young
        if ((newAge < 1) || (newAge > 10)) {
            return;
        }
        // save the new age
        age = newAge;
    }

    //-----------------------------------------------------------------
    //      W o r k   M e t h o d s
    //-----------------------------------------------------------------
    /**
     * Determine pet compatibility.
     * Ok if either pet a baby (under 2) or they are the same species
     * @param another
     * @return 
     */
    public boolean isCompatible(Pet another) {
        if (this.species.equals(another.getSpecies())) {
            return true;
        }
        if ((this.age < 2) || (another.getAge() < 2)) {
            return true;
        }
        return false;
    }

    //-----------------------------------------------------------------
    //      U t i l i t y   M e t h o d s
    //-----------------------------------------------------------------
    /** Return the string representation of a pet's state
     * @return  The string that summarizes the pet's state*/
    public String toString() {
        return name + " (" + species + ") - " + age + " years old. Today is raining. ";
   }

    /**
     * Compare one pet to another.
     * Use name and species.
     * i.e. Cat George is not the same as dog George.
     * @param x
     * @return 
     */
    public boolean equals(Object x) {
        Pet them = (Pet) x;
        if (name.equals(them.getName())) {
            if (species.equals(them.getSpecies())) {
                return true;
            }
        }
        return false;
    }
}
