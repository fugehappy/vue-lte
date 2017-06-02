export const unreadMessagesCount = state => state.messages.main.length
export const unreadNotificationsCount = state => state.notifications.main.length
export const remainTasksCount = state => state.tasks.main.length
export const totalProduct = state => state.products.main

export const currentUser = state => state.user.main // modules/user
export const userToken = state => state.user.token
