## Inheritance Types in Java

Java supports several inheritance types that you can combine to create complex class hierarchies. Here's a breakdown of the main inheritance types with examples:

**1. Single Inheritance:**

This is the most basic type where a class inherits from one parent class. It represents an "is-a" relationship between classes.

```java
class Animal {
  public void makeSound() {
    System.out.println("Generic animal sound");
  }
}

class Dog extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Woof!");
  }
}
```

In this example, `Dog` inherits from `Animal`, gaining access to its methods and fields.

**2. Multilevel Inheritance:**

A class inherits from another class, which itself inherits from another parent class, forming a chain of inheritance.

```java
class Vehicle {
  public void move() {
    System.out.println("Generic vehicle movement");
  }
}

class Car extends Vehicle {
  @Override
  public void move() {
    System.out.println("Car moving");
  }
}

class ElectricCar extends Car {
  public void chargeBattery() {
    System.out.println("Electric car charging");
  }
}
```

Here, `ElectricCar` inherits from `Car` which inherits from `Vehicle`. `ElectricCar` can access members of both `Car` and `Vehicle`.

**3. Hierarchical Inheritance:**

Multiple subclasses inherit from a single parent class, forming a hierarchy.

```java
class Shape {
  public void draw() {
    System.out.println("Generic shape drawing");
  }
}

class Circle extends Shape {
  public void drawCircle() {
    System.out.println("Drawing circle");
  }
}

class Square extends Shape {
  public void drawSquare() {
    System.out.println("Drawing square");
  }
}
```

Both `Circle` and `Square` inherit from `Shape` but don't inherit from each other.

**4. Multiple Inheritance (Java doesn't directly support it):**

While Java doesn't directly support a class inheriting from multiple parent classes due to potential diamond problems, you can achieve a similar effect using interfaces.

Here's an alternative using interfaces:

```java
interface Drawable {
  public void draw();
}

interface Runnable {
  public void run();
}

class Athlete implements Drawable, Runnable {
  @Override
  public void draw() {
    System.out.println("Drawing athlete");
  }

  @Override
  public void run() {
    System.out.println("Athlete running");
  }
}
```

The `Athlete` class implements both `Drawable` and `Runnable` interfaces, gaining access to their methods.

**5. Hybrid Inheritance (Combination of different types):**

You can combine different inheritance types to model complex relationships.

```java
class Animal {
  public void makeSound() {
    System.out.println("Generic animal sound");
  }
}

class Canine extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Canine sound");
  }
}

class Dog extends Canine {
  public void fetch() {
    System.out.println("Dog fetching");
  }
}

class Cat extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Meow!");
  }
}
```

Here, `Canine` inherits from `Animal`, and `Dog` inherits from `Canine`.  `Cat` also inherits directly from `Animal`. This is a combination of single and multilevel inheritance.

Remember, choosing the right inheritance type depends on the relationships you want to model between your classes.  Use inheritance carefully to avoid overly complex hierarchies that can make code harder to maintain.