enum UserRoleEnum {
  UNDEFINED = 0,
  SUPER_ADMIN = 4820, // Má kompletní práva. Může měnit celý web
  ADMIN = 5150, // Práva na kontrolu vložených receptů, atd..
  EDITOR = 1984, // Přidávat recepty, atd...
  USER = 2001, // V podstatě to není potřeba
}

export default UserRoleEnum;
