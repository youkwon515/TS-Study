# TS - Study

> 프로젝트 생성 : `npx create-react-app . --template typescript` <br>
> react styled component : `npm install styled-components@5.3.5` <br>
> uuid : `npm install uuid`

## type 과 interface의 차이
**type**은 `type MyColor = string` 과 `type MyColor = {color: string}` 이렇게
2가지 방식으로 선언이 가능하다. <br>
**type** 은 `|` 와 `&`로 다른  **type**과 섞어서 사용이 가능하다. <br>

**interface**는 무조건 `interface MyIntetface {}` 형식으로 선언해야 한다. <br>
**interface**는 `extents`를 사용하여 다른 **interface**와 섞어서 사용이 가능하다. <br>
