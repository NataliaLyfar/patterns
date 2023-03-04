// used to create complex objects step by step. 
// makes it possible to create different configurations of the same object
// // An example of what tis pattern is needed for
// Suppose we have an app where user can customize his profile
class Profile {
    constructor(
        menuLocation = "top",
        borders = "normal",
        theme = "dark",
        profileImage = "default.jpg"
    ) {
        this.menuLocation = menuLocation;
        this.borders = borders;
        this.theme = theme;
        this.profileImage = profileImage;
    }
}
// As the app grows and becomes more popular, users need more features
// for example
class ExpandedProfile {
    constructor(
        menuLocation = "top",
        borders = "normal",
        theme = "dark",
        profileImage = "default.jpg",
        backgroundImage = "default.png",
        backgroundColor = "cyan",
        profileFont = "Roboto Mono"
    ) {
        this.menuLocation = menuLocation;
        this.borders = borders;
        this.theme = theme;
        this.profileImage = profileImage;
        this.backgroundImage = backgroundImage;
        this.backgroundColor = backgroundColor;
        this.profileFont = profileFont;
    }
}

new ExpandedProfile(null, "soft", "dark", null, null, "red");

// The class grows, the number of parameters increases, so the code becomes vulnerable
// use a Builder pattern
class ProfileBuilder {
    constructor(){}
    // announce all the steps to create a profile
    setMenu(position) {
        this.menuLocation = position;
        return this;
    }
    setBorders(style) {
        this.borders = style;
        return this;
    }
    setTheme(style) {
        this. theme = style;
        return this;
    }
    setCoverImage(url) {
        this.coverImage = url;
        return this;
    }
    setBackgroundColor(color) {
        this.backgroundColor = color;
        return this;
    }
    setMenuColor(color) {
        this.menuColor = color;
        return this;
    }
    setProfileFont(fontFamily) {
        this.profileFont = fontFamily;
        return this;
    }

    build() {
        return new NewProfile(this);
    }
}

// change the class Profile to accept 
// an instance of builder class instead of individual parameters
class NewProfile {
    constructor(builder) {
        this.menuLocation = builder.menuLocation;
        this.borders = builder.borders;
        this.theme = builder.theme;
        this.profileImage = builder.profileImage;
        this.backgroundImage = builder.backgroundImage;
        this.backgroundColor = builder.backgroundColor;
        this.profileFont = builder.profileFont;
    }
}

const userA = new ProfileBuilder()
.setBorders("dotted")
.setMenu("left")
.setProfileFont("San Serif")
.build();

console.log("user A", userA);