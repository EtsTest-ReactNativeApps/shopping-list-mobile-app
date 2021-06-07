import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '$lightGray',
  },
  text: {
    fontSize: '1.6rem',
  },
  icon: {
    color: '$customRed',
    fontSize: '1.8rem',
  },
});

export default styles;
