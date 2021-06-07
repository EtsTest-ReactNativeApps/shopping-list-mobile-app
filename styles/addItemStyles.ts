import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  addItemView: {
    margin: 5,
  },
  input: {
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '$customBlue',
    fontSize: '2rem',
  },
  button: {
    padding: 10,
    backgroundColor: '$customBlue',
    color: '#fff',
    fontSize: '2rem',
    textAlign: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: '2.2rem',
  },
});

export default styles;
