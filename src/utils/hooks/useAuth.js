// The hooks folder consist of all custom hooks.
// for example:  useAuth.js

//Below is the Dummy code of useAuth

// export const useAuth = () => {

//   const verifyCode = async (code) => {
//     try {
//       const res = await handlePostRequest(verifyCodeHandler, code)
//       let token = res?.data?.data?.token
//       if (res?.data?.status) {
//         navigation.navigate('ChangePassword', { token: token })
//         showToast('success', 'Code sent successfully.')
//       }
//     } catch (error) {
//       showToast('error', error?.error)
//       console.log({ error });

//     }
//   }

//   const resetPassword = async (data) => {
//     try {
//       const res = await handlePostRequest(resetPasswordHandler, data)
//       return res
//     } catch (error) {
//       showToast('error', error?.error)
//       console.log({ error });

//     }
//   }

//   return {
//     verifyCode,
//     resetPassword,
//   };
// };
