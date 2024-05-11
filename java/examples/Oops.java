
import java.lang.Math;


public class Oops {

    public static void main(String[] args) {
        Shape shape = new Square(5);
        shape.printArea(); 
        shape = new Cicle(5);
        shape.printArea();
    }

}

abstract class Shape {
    public abstract double getArea(); // abstract method

    public void printArea() {
        System.out.println("Area: " + getArea());
    }
}

class Square extends Shape {
    private double side;

    public Square(double side) {
        this.side = side;
    }

    @Override
    public double getArea() {
        return side * side;
    }
}

class Cicle extends Shape {
    private double radius;

    public Cicle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}