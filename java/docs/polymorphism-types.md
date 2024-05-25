## Polymorphism Types

Java supports two main types of polymorphism: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding achieved through inheritance). While inheritance itself isn't a type of polymorphism, it's a key concept that enables runtime polymorphism. Here's a breakdown of how they work together:

**Compile-Time Polymorphism (Method Overloading):**

* Involves methods with the same name but different parameter lists (number, type, or order of parameters).
* The compiler decides which method to call based on the arguments provided at compile time.
* Inheritance doesn't play a role here.

**Example:**

```java
class Shape {
  public void draw() {
    System.out.println("Generic shape drawing");
  }

  public void draw(int size) { // Method overloading
    System.out.println("Drawing shape with size: " + size);
  }
}
```

In this example, the `Shape` class has two `draw` methods. One takes no arguments, and the other takes an integer `size`. When you call `draw()`, the compiler knows to call the method without arguments.

**Runtime Polymorphism (Method Overriding with Inheritance):**

* Achieved through inheritance.
* A subclass overrides a method inherited from its superclass to provide its specific implementation.
* At runtime, the actual method called depends on the object's type, not the reference variable type.

**Example:**

```java
class Animal {
  public void makeSound() {
    System.out.println("Generic animal sound");
  }
}

class Dog extends Animal {
  @Override // Explicitly declare overriding
  public void makeSound() {
    System.out.println("Woof!");
  }
}

class Cat extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Meow!");
  }
}
```

Here, `Animal` has a `makeSound` method. The subclasses `Dog` and `Cat` override it with their specific sounds. Now, if you have an `Animal` reference variable:

```java
Animal animal = new Dog(); // Create a Dog object but assign it to Animal reference
animal.makeSound(); // Prints "Woof!" (runtime polymorphism)
```

At runtime, even though the reference variable is `Animal`, since the actual object is a `Dog`, the `Dog` class's `makeSound` implementation is called (runtime decision based on object type).

**Inheritance doesn't directly implement polymorphism, but it's a core concept that enables runtime polymorphism through method overriding.** You can use both method overloading and overriding within inheritance hierarchies for more flexible and reusable code.