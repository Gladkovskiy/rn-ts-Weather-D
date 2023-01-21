module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['warn'],
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-trailing-spaces': 'off',
        'prettier/prettier': 'off',
        'react/self-closing-comp': 'off',
        'eol-last': 0,
        'jsx-quotes': 'off',
        'react-native/no-inline-styles': 'off',
        curly: 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
}
