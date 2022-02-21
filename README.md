# React 자체 상태관리 recoil

## atom 함수

- 전역 상태관리가 되는 대상
- const state = atom({key : '고유 키(string)', default : 값})

## Hooks

> 값을 가져오는 hooks (getter)

- [state, setState] = useRecoilState(state) (useState처럼 사용 하면 된다 setState로 값 변경도 가능)
- useRecoilValue(state)
  > 값을 변경 하는 hooks (setter)
- setState = useSetRecoilState(state)

일단 이정도.. 코드가 더 깔끔해 진듯 하다
