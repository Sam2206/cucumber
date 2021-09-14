package domains;

public class CalorieDetail 
{
	public int age;
	public int height;
	public int weight;
	public String sex;
	
	public CalorieDetail() {}
	
	public CalorieDetail(int age, int height, int weight, String sex) {
		super();
		this.age = age;
		this.height = height;
		this.weight = weight;
		this.sex = sex;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}

}
