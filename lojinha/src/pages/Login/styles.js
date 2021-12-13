// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// })

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 

  container: { 
    flex: 1, 
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    marginTop: '5%', 
    fontSize: 30, 
    fontWeight: '900', 
    color: '#fff', 
    alignSelf: 'center', 
  },
  login: {
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginButton: { 
    width: '50%',
    alignSelf: 'center',
    backgroundColor: '#e03b22', 
    paddingVertical: 12, 
    borderRadius: 6, 
    marginTop: 20, 
  }, 
  loginButtonText: { 
    fontSize: 20, 
    fontWeight: '500', 
    color: '#fafafa', 
    alignSelf: 'center', 
  }, 
  input: { 
    width: '100%', 
    height: 50, 
    backgroundColor: '#202430', 
    borderRadius: 6, 
    marginTop: 10, 
    paddingHorizontal: 10, 
    fontSize: 16, 
    color: '#808e9b', 
  },
  fpText: { 
    alignSelf: 'center', 
    color: '#e03b22', 
    fontSize: 18, 
    fontWeight: '600', 
    marginTop: 10, 
  }, 
  loginWithBar: { 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 50, 
  }, 
  iconButton: { 
    backgroundColor: '#202430', 
    padding: 14, 
    marginHorizontal: 10, 
    borderRadius: 100, 
  }, 
  signUpTextView: {
    marginTop: '50%', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
  }, 
  signUpText: { 
    color: '#e03b22', 
    fontSize: 20, 
    fontWeight: '500', 
  },
});
