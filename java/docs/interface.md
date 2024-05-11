## Interface 

In Java, an interface is a blueprint that defines the behavior of a class. It's like a contract that specifies what a class must do, without specifying how it will do it. Interfaces are used to achieve abstraction and promote loose coupling between classes.

Here are some key points about Java interfaces:

* **Abstract methods:** Interfaces contain methods that don't have a body (implementation). These are called abstract methods. The class that implements the interface must provide the implementation for these methods.
* **Achieving abstraction:** By separating the "what" (interface) from the "how" (implementation class), interfaces promote abstraction. You focus on what functionality is needed without worrying about the specific details of how it's achieved.
* **Multiple inheritance:** Unlike classes that can only extend one parent class, a class can implement multiple interfaces. This allows a class to inherit functionalities from multiple sources.
* **Static constants:** Interfaces can also contain static constants (final variables by default). These constants are shared across all classes that implement the interface.

Here's a simple example of an interface in Java:

```java
interface Animal {
  public void makeSound(); // abstract method
  public static final int LEGS = 4; // static constant
}
```

This interface `Animal` defines an abstract method `makeSound` that any class implementing `Animal` must provide an implementation for. It also defines a static constant `LEGS` with a value of 4.

Classes like `Dog` and `Cat` can implement the `Animal` interface and provide their own implementations for the `makeSound` method.

Overall, interfaces are a powerful tool in Java for achieving abstraction, promoting loose coupling, and enabling multiple inheritance.